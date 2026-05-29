INSERT INTO `task_statuses` (`id`, `name`, `description`, `color`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES (1, 'Pendente', 'Aguardando inicio', '#F59E0B', 1, 1, '2026-05-25 14:46:01', '2026-05-25 14:46:01');
INSERT INTO `task_statuses` (`id`, `name`, `description`, `color`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES (2, 'Em andamento', 'Sendo trabalhado agora', '#3B82F6', 2, 1, '2026-05-25 14:46:01', '2026-05-25 14:46:01');
INSERT INTO `task_statuses` (`id`, `name`, `description`, `color`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES (3, 'Concluido', 'Finalizado com sucesso', '#10B981', 3, 1, '2026-05-25 14:46:01', '2026-05-25 14:46:01');
INSERT INTO `task_statuses` (`id`, `name`, `description`, `color`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES (4, 'Bloqueado', 'Impedido por dependencia', '#EF4444', 4, 1, '2026-05-25 14:46:01', '2026-05-25 14:46:01');
INSERT INTO `task_statuses` (`id`, `name`, `description`, `color`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES (5, 'Cancelado', 'Nao sera mais realizado', '#6B7280', 5, 1, '2026-05-25 14:46:01', '2026-05-25 14:46:01');


INSERT INTO `user_cargos` (`id`, `description`, `created_at`, `updated_at`, `name`) VALUES (1, 'Administrador do Sistema', '2026-05-26 16:29:08', '2026-05-26 16:29:08', 'Administrador');
INSERT INTO `user_cargos` (`id`, `description`, `created_at`, `updated_at`, `name`) VALUES (2, 'Usuário Comum', '2026-05-26 16:29:08', '2026-05-26 16:29:08', 'Funcionario');

INSERT INTO `users` (`id`, `username`, `email`, `password_hash`, `role`, `cargo`, `is_active`, `created_at`, `updated_at`) VALUES (1, 'admin', 'admin@weeklyreports.local', '$2a$12$zZLBOIJ5MJoj6J5pu3oyQelIvsur/arKpcey7kRrsJ4lg.j.D8DL.', 'admin', 1, 1, NOW(), NOW() );
