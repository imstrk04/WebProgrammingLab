require_relative 'vehicle'

class Car < Vehicle
  attr_accessor :fuel_type, :seating_capacity

  def initialize(model, manufacturer, price, fuel_type, seating_capacity)
    super(model, manufacturer, price)
    @fuel_type = fuel_type
    @seating_capacity = seating_capacity
  end

  def display_details
    super
    puts "Fuel Type: #{@fuel_type}, Seating Capacity: #{@seating_capacity}"
  end

  def apply_discount
    discount = @price * 0.05
    puts "Car Discount: #{discount}, Final Price: #{@price - discount}"
  end
end
