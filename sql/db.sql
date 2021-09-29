-- DB
CREATE DATABASE store;

-- Roles
CREATE TABLE IF NOT EXISTS roles(
    id UUID PRIMARY KEY not null,
    name VARCHAR(30) not null unique
);

-- Products
create TABLE IF NOT EXISTS products(
	description VARCHAR(30),
	id UUID PRIMARY KEY not null,
	name VARCHAR(30) not null unique,
	price INTEGER not null
);

-- Users
CREATE TABLE IF NOT EXISTS users(
	document VARCHAR(20) not null unique,
	id UUID PRIMARY KEY not null,
	last_name VARCHAR(30),
	name VARCHAR(30) not null,
	roles_id UUID not null,
	FOREIGN KEY (roles_id) REFERENCES roles(id)
)

-- Sales
CREATE TABLE IF NOT EXISTS sales(
	id UUID PRIMARY KEY not null,
	products_id UUID not null REFERENCES products(id),
	qty INTEGER not null,
	sale_at TIMESTAMP not null,
	users_id UUID not null REFERENCES users(id)
)

-- Insertando en products
INSERT INTO products (id, name, description, price) VALUES
('479fba0a-baaf-4b46-95a2-83a663817646','Arroz','Libra', 3000),
('efbff7f6-6374-4c2f-9c96-3611c65068ba', 'Papas', 'Libra', 1000),
('f7c377cf-0f92-435a-b5e6-2c8cdd9d10c6', 'Agua sin gas', '500 ml', 2000),
('3bed5d90-64ed-4bc1-8a3a-a378737ed542', 'Agua con gas', '500 ml', 2500),
('c3f25f98-c5c3-4a00-b550-f716ae36b25f', 'Docena de huevos', 'ministro de hacienda aprueba', 1800);

INSERT INTO roles (id, name) VALUES
('19023b0c-20d0-11ec-9621-0242ac130002', 'admin'),
('19023d3c-20d0-11ec-9621-0242ac130002', 'employee'),
('19023e22-20d0-11ec-9621-0242ac130002', 'everyone');

INSERT INTO users (document, id, last_name, name, roles_id) VALUES
('1000920570', '3dbb2eb3-3d35-4c29-bb72-3a7fd80a398c', 'Valencia', 'Manuel', '19023b0c-20d0-11ec-9621-0242ac130002');

INSERT INTO sales (id, products_id, qty, sale_at, users_id) VALUES
('847e89a8-20d0-11ec-9621-0242ac130002', '479fba0a-baaf-4b46-95a2-83a663817646', 2, '2021-04-14T05:39:42+00:00', '3dbb2eb3-3d35-4c29-bb72-3a7fd80a398c');