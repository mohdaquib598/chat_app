class User {
}
User.AuthenticateUser = (req, res) => {
    const requestParams = Object.assign(Object.assign(Object.assign({}, req.query), req.params), req.body);
    try {
        console.log("requestParams+++", requestParams);
        res.status(200).json({ message: "User authenticated successfully11111======" });
    }
    catch (error) {
        console.error(error);
        if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
            res.status(500).json({ message: String(error.message) });
        }
        else {
            res.status(500).json({ message: "An unexpected error occurred" });
        }
    }
};
export { User };
