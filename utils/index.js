export function transformMongoIdInArray(dataArray) {
    const mappedArray = dataArray
        .map((item) => {
            return {
                id: item._id.toString(),
                ...item,
            };
        })
        .map(({ _id, ...rest }) => rest);
    return mappedArray;
}

export function transformMongoIdFromSIngleObject(dataObject) {
    const id = dataObject._id.toString();
    const { _id, ...rest } = dataObject;
    return {
        id,
        ...rest,
    };
}

export function transformObjectId(array) {
    let ids = [];
    array.map((item) => {
        ids.push(item.toString());
    });
    return ids;
}

