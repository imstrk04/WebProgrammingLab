require_relative 'car'
require_relative 'bike'

car = Car.new("Model S", "Tesla", 5000, "Electric", 5)
puts "Car Details:"
car.display_details
car.apply_discount

puts "\n----------------------------------------\n"

bike = Bike.new("450X", "Ather", 3000, 998)
puts "Bike Details"
bike.display_details
bike.apply_discount

