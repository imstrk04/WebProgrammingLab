require_relative 'vehicle'

class Bike < Vehicle

  attr_accessor :engine_displacement

  def initialize(model, manufacturer, price, engine_displacement)
    super(model, manufacturer, price)
    @engine_displacement = engine_displacement
  end

  def display_details
    super
    puts "Engine Displacement: #{@engine_displacement}"
  end

  def apply_discount
    discount = @price * 0.1
    final_price = @price - discount
    puts "Bike Discount: #{discount}, Final Price: #{final_price}"
  end
end