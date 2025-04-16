=begin

# Global variables
$global_variable = "I am global"

def my_method1
  puts $global_variable
end

my_method1

#Local variable
def my_method2
  local_variable = "Hello"
end

# Example of instance variable

class Person
  def initialize(name)
    @name = name
  end

  def greet
    puts "Hello, #{@name}!"
  end
end

person = Person.new("Sada")
person.greet

# Class variable

class Counter
  @@count = 0
  def increment
    @@count += 1
  end
  def self.total_count
    @@count
  end
end

counter1 = Counter.new
counter1.increment

counter2 = Counter.new
counter2.increment

puts Counter.total_count



# Example of getting input
a = gets.chomp.to_i

if a >= 18
  puts "You are eligible to vote."
else
  puts "You are not eligible to vote."
end
=end

def calculate_cart_value(cart)
  total = 0.0

  cart.each do |product|
    product_name, quantity, price = product
    product_total = quantity * price

    # Apply a 10% discount if quantity is greater than 5
    if quantity > 5
      product_total *= 0.9 # Apply discount
    end

    total += product_total
  end

  total
end

# Example usage
cart = [
  ["Product A", 3, 10.0],
  ["Product B", 6, 15.0],
  ["Product C", 2, 20.0]
]

final_total = calculate_cart_value(cart)
puts "The final total amount is: $#{'%.2f' % final_total}"