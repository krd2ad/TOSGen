-- Supabase schema.sql
create table if not exists users (
  id uuid primary key references auth.users on delete cascade,
  email text unique
);

create table if not exists policies (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  title text,
  content text,
  created_at timestamptz default now()
);

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  stripe_customer_id text,
  stripe_subscription_id text,
  status text,
  current_period_end timestamptz
);
