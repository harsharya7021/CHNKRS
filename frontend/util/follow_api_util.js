export const postFollow = (id) => {
    return $.ajax({
        url: "api/follows",
        method: "POST",
        data: {id}
    })
}

export const destoryFollow = (id) => {
    return $.ajax({
        url: `api/follows/${id}`,
        method: "DELETE",
        data: {id}
    })
}