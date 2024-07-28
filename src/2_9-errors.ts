try {
    throw ''
    throw 123;
    throw {};
    throw null;
} catch (error: unknown) {
    getErrorMessage(error);
}

function getErrorMessage(error: unknown) {
    if (error instanceof Error) {
        return error.message;
    }
}
