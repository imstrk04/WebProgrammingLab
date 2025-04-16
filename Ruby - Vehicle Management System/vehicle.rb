class Vehicle
  attr_accessor :model, :manufacturer, :price

  def initialize(model, manufacturer, price)
    @model = model
    @manufacturer = manufacturer
    @price = price
  end

  def display_details
    puts "Model: #{@model}, Manufacturer: #{@manufacturer}, Price: #{@price}"
  end

  def apply_discount
    puts "No specific discount available"
  end
end

