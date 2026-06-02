INSERT INTO `task_statuses` (`id`, `name`, `description`, `color`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES (1, 'Pendente',      'Aguardando inicio',        '#F59E0B', 1, 1, NOW(), NOW());
INSERT INTO `task_statuses` (`id`, `name`, `description`, `color`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES (2, 'Em andamento',  'Sendo trabalhado agora',   '#3B82F6', 2, 1, NOW(), NOW());
INSERT INTO `task_statuses` (`id`, `name`, `description`, `color`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES (3, 'Concluido',     'Finalizado com sucesso',   '#10B981', 3, 1, NOW(), NOW());
INSERT INTO `task_statuses` (`id`, `name`, `description`, `color`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES (4, 'Bloqueado',     'Impedido por dependencia', '#EF4444', 4, 1, NOW(), NOW());
INSERT INTO `task_statuses` (`id`, `name`, `description`, `color`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES (5, 'Cancelado',     'Nao sera mais realizado',  '#6B7280', 5, 1, NOW(), NOW());

INSERT INTO `task_priorities` (`id`, `name`, `description`, `color`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES (1, 'Baixa',  'Pode esperar',         '#6B7280', 1, 1, NOW(), NOW());
INSERT INTO `task_priorities` (`id`, `name`, `description`, `color`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES (2, 'Media',  'Atencao normal',       '#3B82F6', 2, 1, NOW(), NOW());
INSERT INTO `task_priorities` (`id`, `name`, `description`, `color`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES (3, 'Alta',   'Prioridade elevada',   '#F59E0B', 3, 1, NOW(), NOW());
INSERT INTO `task_priorities` (`id`, `name`, `description`, `color`, `sort_order`, `is_active`, `created_at`, `updated_at`) VALUES (4, 'Urgente','Resolver imediatamente','#EF4444', 4, 1, NOW(), NOW());

INSERT INTO `user_cargos` (`id`, `description`, `created_at`, `updated_at`, `name`) VALUES (1, 'Administrador do Sistema', NOW(), NOW(), 'Administrador');
INSERT INTO `user_cargos` (`id`, `description`, `created_at`, `updated_at`, `name`) VALUES (2, 'Usuario Comum',            NOW(), NOW(), 'Funcionario');

INSERT INTO `users` (`id`, `username`, `email`, `password_hash`, `role`, `cargo`, `is_active`, `created_at`, `updated_at`) VALUES (1, 'admin', 'admin@weeklyreports.local', '$2a$12$zZLBOIJ5MJoj6J5pu3oyQelIvsur/arKpcey7kRrsJ4lg.j.D8DL.', 'admin', 1, 1, NOW(), NOW());
