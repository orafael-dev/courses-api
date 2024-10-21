import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1729170595027 } from 'src/migrations/1729170595027-CreateCoursesTable';
import { CreateTagsTable1729255753806 } from 'src/migrations/1729255753806-CreateTagsTable';
import { CreateCoursesTagsTable1729256880555 } from 'src/migrations/1729256880555-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1729257240723 } from 'src/migrations/1729257240723-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1729260474970 } from 'src/migrations/1729260474970-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

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
