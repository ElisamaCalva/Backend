-- CreateTable
CREATE TABLE `tb_inventariado` (
    `id_Recurso` INTEGER NOT NULL AUTO_INCREMENT,
    `numero_serie` VARCHAR(25) NULL,
    `descripcion` VARCHAR(255) NULL,
    `marca` VARCHAR(20) NULL,
    `color` VARCHAR(10) NULL,
    `observaciones` VARCHAR(255) NULL,
    `numero_etiqueta` INTEGER NULL,
    `tipo` ENUM('EquipoComputo', 'Mobiliario', 'Cosumible') NULL,
    `estatus` BOOLEAN NULL,

    PRIMARY KEY (`id_Recurso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_resguardos` (
    `id_usuario` INTEGER NULL,
    `id_recurso` INTEGER NULL,

    INDEX `id_recurso`(`id_recurso`),
    INDEX `id_usuario`(`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_roles` (
    `id_Rol` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` ENUM('Administrador', 'Director', 'Docente', 'Laboratorista') NULL,

    PRIMARY KEY (`id_Rol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_trabajadores` (
    `id_Trabajador` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(25) NULL,
    `apellidos` VARCHAR(40) NULL,
    `numero_trabajador` INTEGER NULL,
    `id_area` INTEGER NULL,
    `estatus` BOOLEAN NULL,

    INDEX `id_area`(`id_area`),
    PRIMARY KEY (`id_Trabajador`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_ubicacionarea` (
    `id_Ubicacion` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NULL,
    `observaciones` VARCHAR(255) NULL,

    PRIMARY KEY (`id_Ubicacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_usuarios` (
    `id_Usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `id_Rol` INTEGER NULL,
    `usuario` VARCHAR(10) NULL,
    `contraseña` VARCHAR(50) NULL,
    `id_trabajador` INTEGER NULL,
    `estatus` BOOLEAN NULL,

    INDEX `id_Rol`(`id_Rol`),
    INDEX `id_trabajador`(`id_trabajador`),
    PRIMARY KEY (`id_Usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
