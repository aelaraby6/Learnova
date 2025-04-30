CREATE DATABASE learnova;
USE learnova;

CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    role VARCHAR(50),
    is_deleted BOOLEAN DEFAULT FALSE
);

CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    is_deleted BOOLEAN DEFAULT FALSE,
    created_at VARCHAR(255),
    updated_at VARCHAR(255)
);

CREATE TABLE teacher (
    teacher_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    bio TEXT,
    profile_picture VARCHAR(255),
    facebook_link VARCHAR(255),
    linkedin_link VARCHAR(255),
    twitter_link VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    category_id INT,
    price DECIMAL(10,2),
    image VARCHAR(255),
    teacher_id INT,
    is_deleted BOOLEAN DEFAULT FALSE,
    duration VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id)
);

CREATE TABLE cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total_price DECIMAL(10,2),
    is_deleted BOOLEAN DEFAULT FALSE,
    role VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE cart_items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    cart_id INT,
    product_id INT,
    is_deleted BOOLEAN DEFAULT FALSE,
    role VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cart_id) REFERENCES cart(cart_id),
    FOREIGN KEY (product_id) REFERENCES courses(course_id)
);
