-- CreateTable
CREATE TABLE `animeList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `anime_mal_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `rating` INTEGER NULL,
    `review` VARCHAR(191) NULL,

    UNIQUE INDEX `animeList_user_email_anime_mal_id_key`(`user_email`, `anime_mal_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mangaList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `manga_mal_id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `rating` INTEGER NULL,
    `review` VARCHAR(191) NULL,

    UNIQUE INDEX `mangaList_user_email_manga_mal_id_key`(`user_email`, `manga_mal_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tag_user_email_name_key`(`user_email`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_animeListTotag` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_animeListTotag_AB_unique`(`A`, `B`),
    INDEX `_animeListTotag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_mangaListTotag` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_mangaListTotag_AB_unique`(`A`, `B`),
    INDEX `_mangaListTotag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_animeListTotag` ADD CONSTRAINT `_animeListTotag_A_fkey` FOREIGN KEY (`A`) REFERENCES `animeList`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_animeListTotag` ADD CONSTRAINT `_animeListTotag_B_fkey` FOREIGN KEY (`B`) REFERENCES `tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_mangaListTotag` ADD CONSTRAINT `_mangaListTotag_A_fkey` FOREIGN KEY (`A`) REFERENCES `mangaList`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_mangaListTotag` ADD CONSTRAINT `_mangaListTotag_B_fkey` FOREIGN KEY (`B`) REFERENCES `tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
