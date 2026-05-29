import ("joi");

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required()
    .messages({
        'any.required': 'Nome de Usuario deve ter pelo menos 3 caracteres e no máximo 30 caracteres.'
    }),
    password: Joi.string().min(5).required()
    .messages({
        'any.required': 'Senha deve ter pelo menos 5 caracteres.'
    }),
    email: Joi.string().email().required()
    .messages({
        'any.required': 'Email é obrigatório.',
        'string.email': 'Email deve ser um email válido.'
    }),
});

const loginSchema = Joi.object({
    username: Joi.string().required()
    .messages({
        'any.required': 'Nome de Usuario é obrigatório.'
    }),
    password: Joi.string().required()
    .messages({
        'any.required': 'Senha é obrigatória.'
    })
});


module.exports = {
    registerSchema,
    loginSchema
};