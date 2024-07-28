type IdLable = {
    id: number;
}

type NameLabel = {
    name: string;
}

type NameOrId<Value extends string | number> = Value extends number
    ? IdLable
    : NameLabel

function createLabel<Value extends string | number>(value: Value): NameOrId<Value> {
    throw "";
}

const idLabel = createLabel<number>(123);
const nameLabel = createLabel<string>('123');