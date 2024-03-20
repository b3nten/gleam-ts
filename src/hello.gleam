import gleam/io

pub fn say_hello() {
  io.println("Hello from gleam!")
}

pub fn add(a: Int, b: Int) -> Int {
  a + b
}

pub fn multiply(a: Int, b: Int) -> Int {
  a * b
}
