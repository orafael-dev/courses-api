import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1729170595027 } from 'src/migrations/1729170595027-CreateCoursesTable';
import { CreateTagsTable1729255753806 } from 'src/migrations/1729255753806-CreateTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1729170595027, CreateTagsTable1729255753806],
});
