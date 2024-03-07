CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  categoria VARCHAR(255),
  preco DECIMAL(10, 2)
);

INSERT INTO produtos (nome, categoria, preco) VALUES
('Produto 1', 'Eletrônicos', 100.00),
('Produto 2', 'Roupas', 50.00),
('Produto 3', 'Livros', 20.00);
