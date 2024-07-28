// // export let example = '';

// // // example = 123;
// // example = '123';

// // function calculate(a: number) {
// //     if (a > 0) {
// //         return;
// //     }

// //     if (a === 3) {
// //         return true;
// //     }

// //     if (a === 4) {
// //         return false;
// //     }

// //     return a;
// // }

// // interface Movie {
// //     readonly title: string;
// //     readonly duration: number;
// //     readonly awards?: string[];
// // }

// // function getProperty<EntityG extends object, KeyG extends (keyof EntityG)>(
// //     entity: EntityG,
// //     key: KeyG,
// // ): EntityG[KeyG] {
// //     return entity[key];
// // }

// // getProperty({title: '', duration: 123}, 'title');

// // // function call(cb: (...args: any) => unknown, ...args: unknown[]): void {
// // //     cb(args);
// // // }
// // function call<Arguments extends unknown[], ReturnType>(
// //     cb: (...args: Arguments) => ReturnType,
// //     ...args: Arguments
// // ): ReturnType {
// //     return cb(...args);
// // }

// // call(
// //     (user: {name: string}, count: number) => user,
// //     {name: 'Egor'},
// //     4,
// // )

// type MyReturnType<Func extends (...args: any[]) => unknown> =
//     Func extends (...args: any[]) => infer CalcReturnType ? CalcReturnType : never;

// const cbReturn = () => ({a: 123, c: {title: '432'}});

// type TestReturn = MyReturnType<typeof cbReturn>

// type MyParamsType<Func extends (...args: any[]) => unknown> =
//     Func extends (...args: infer CalcParamsType) => unknown ? CalcParamsType : never;

// const cbParams = (a: string, b: number, c: {name: string}) => {};

// type TestParams = MyParamsType<typeof cbParams>

// type PromiseReturn<PromiseG extends Promise<unknown>> = PromiseG extends Promise<infer ReturnType> ? ReturnType : never

// const promise = new Promise<number>(() => {});

// type TestPromiseReturn = PromiseReturn<typeof promise>
