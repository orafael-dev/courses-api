import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1729170595027 } from 'src/migrations/1729170595027-CreateCoursesTable';
import { CreateTagsTable1729255753806 } from 'src/migrations/1729255753806-CreateTagsTable';
import { CreateCoursesTagsTable1729256880555 } from 'src/migrations/1729256880555-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1729257240723 } from 'src/migrations/1729257240723-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1729260474970 } from 'src/migrations/1729260474970-AddTagsIdToCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1729170595027,
    CreateTagsTable1729255753806,
    CreateCoursesTagsTable1729256880555,
    AddCoursesIdToCoursesTagsTable1729257240723,
    AddTagsIdToCoursesTagsTable1729260474970,
  ],
});
