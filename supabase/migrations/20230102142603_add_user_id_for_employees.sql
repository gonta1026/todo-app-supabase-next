alter table "public"."employees" add column "user_id" uuid;

alter table "public"."employees" add constraint "employees_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) not valid;

alter table "public"."employees" validate constraint "employees_user_id_fkey";


