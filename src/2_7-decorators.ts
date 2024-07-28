import "reflect-metadata"

export class Calculator {
    @MeasureTime()
    sum(a: number, b: number): number {
        return a + b;
    }

    // @MeasureTime()
    // test() {}
}

function MeasureTime() {
    return (
        _target: object,
        propertyName: string,
        descriptor: PropertyDescriptor,
    ) => {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: unknown[]) {
            console.time(propertyName);

            const result = originalMethod.apply(this, args);

            console.timeEnd(propertyName);

            return result;
        }
    }
}

// ---------------------------

type ServiceMetadata = {
    isSingleton: boolean;
}
type Constructor = new (...args: any[]) => any;

@Service({
    isSingleton: true,
})
class UserService {}

function Service(metadata: ServiceMetadata) {
    return (constructor: Constructor) => {
        Reflect.defineMetadata('service', metadata, constructor);
    }
}

function isServiceMetadata(metadata: unknown): metadata is ServiceMetadata {
    const serviceMetadata = metadata as ServiceMetadata;

    return !!serviceMetadata && typeof serviceMetadata.isSingleton === 'boolean';
}

const instanceStorage = new Map();

function getInstance<ServiceConstructor extends Constructor>(Service: ServiceConstructor): ServiceConstructor {
    const metadata: unknown = Reflect.getMetadata('service', Service);

    if (!isServiceMetadata(metadata)) {
        return new Service();
    }

    if (!metadata.isSingleton) {
        return new Service();
    }

    if (!instanceStorage.get(Service)) {
        instanceStorage.set(Service, new Service());
    }

    return instanceStorage.get(Service);
}
