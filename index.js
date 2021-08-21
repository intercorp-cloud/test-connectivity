/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.survey = (req, res) => {
    let message = req.query.message || req.body.message || 'Hello Intercorp!';
    res.status(200).send(message);
};
