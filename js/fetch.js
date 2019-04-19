const loadLegos = () => {
    return fetch("./lego-colors.json")
        .then(res => res.json())
        .then((result) => {
            return result;
        },
        (error) => {
            return error;
        }
    );
};