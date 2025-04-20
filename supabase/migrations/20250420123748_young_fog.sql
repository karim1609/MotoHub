/*
  # Initial Schema Setup for MotoHub

  1. New Tables
    - `users`: Store user profiles and preferences
    - `motorcycles`: Motorcycle inventory and details
    - `service_appointments`: Service booking records
    - `test_rides`: Test ride scheduling

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  phone text,
  preferences jsonb
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Create motorcycles table
CREATE TABLE IF NOT EXISTS motorcycles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  price numeric NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  engine text NOT NULL,
  power text NOT NULL,
  top_speed text NOT NULL,
  is_new boolean DEFAULT false,
  description text,
  specs jsonb DEFAULT '{}',
  features text[] DEFAULT '{}',
  in_stock boolean DEFAULT true
);

ALTER TABLE motorcycles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view motorcycles"
  ON motorcycles
  FOR SELECT
  TO public
  USING (true);

-- Create service_appointments table
CREATE TABLE IF NOT EXISTS service_appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES users(id),
  service_type text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  motorcycle_details text NOT NULL,
  notes text,
  status text DEFAULT 'pending',
  completed_at timestamptz
);

ALTER TABLE service_appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own appointments"
  ON service_appointments
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create appointments"
  ON service_appointments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create test_rides table
CREATE TABLE IF NOT EXISTS test_rides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES users(id),
  motorcycle_id uuid REFERENCES motorcycles(id),
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  status text DEFAULT 'pending',
  notes text
);

ALTER TABLE test_rides ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own test rides"
  ON test_rides
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can schedule test rides"
  ON test_rides
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);