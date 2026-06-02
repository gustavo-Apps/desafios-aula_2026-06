// src/Controllers/authController.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const authController = {
  login: async (req, res) => {
    const { username, password } = req.body;

    try {
      // 1. Busca o usuario no banco (com password_hash, saindo do defaultScope)
      const user = await User.scope(null).findOne({ where: { username, is_active: true } });
      if (!user) {
        return res.status(401).json({ error: 'Credenciais invalidas.' });
      }

      // 2. Compara a senha digitada com o hash salvo
      const valid = await bcrypt.compare(password, user.password_hash);
      if (!valid) {
        return res.status(401).json({ error: 'Credenciais invalidas.' });
      }

      // 3. Gera o token JWT
      const token = jwt.sign(
        { sub: user.id, username: user.username, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '8h' }
      );

      return res.status(200).json({
        message: "Login realizado com sucesso.",
        token,
        user: { id: user.id, username: user.username, role: user.role },
      });

    } catch (error) {
      return res.status(500).json({ error: 'Erro interno.', details: error.message });
    }
  },
  create: async (req, res) => {
    const { username, password, email, role, cargo } = req.body;

    try {
      // 1. Verifica se o usuário já existe
      const existingUser = await User.findOne({ where: { username } });
      const existingEmail = await User.findOne({ where: { email } });
      if (existingUser || existingEmail) {
        return res.status(409).json({ error: 'Usuário já existe.' });
      }

      // 2. Cria o hash da senha
      const password_hash = await bcrypt.hash(password, 10);

      // 3. Cria o usuário no banco
      const user = await User.create({ username, password_hash, email, role, cargo });

      return res.status(201).json({
        message: "Usuario criado com sucesso.",
        user: { id: user.id, username: user.username, email: user.email, role: user.role },
      });

    } catch (error) {
      return res.status(500).json({ error: 'Erro interno.', details: error.message });
    }
  }
};

export default authController;