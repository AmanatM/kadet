package Week6_FA19;

public class Circle extends GeometryObject{
  // the radius of this circle
  private double radius;

  /**Default constructor*/
  public Circle() {
	radius = 1; // default value for the radius
  }

  /**Construct circle with a specified radius*/
  public Circle(double radius) {
	this.radius = radius;
  }
	  
  /**Construct circle with a radius, color and filled*/
  public Circle(double radius, String color, boolean filled) {
	this.radius = radius;  	// two other ways to assign color and filled
	setColor(color);  		// can use this.setColor()?
	setFilled(filled);		// can use this.setFilled()?
  }
  
  /**Return a radius*/
  public double getRadius() {
	return radius;
  }
  
  /**Set a new radius*/
  public void setRadius(double radius) {
	this.radius = radius;
  }
	  
  /**Return the area of this circle*/
  public double getArea() {
	return radius * radius * Math.PI;
  }

  /**Return the perimeter of this circle*/
  public double getPerimeter() {
	return 2 * radius * Math.PI;
  }  
		  
  /**Print the circle info*/ // change this method to toString() - overriding method
  public void printCircle() {
	System.out.println("The circle is created" + getDateCreated() + 
	  " and the radius is " + radius);
  } 	  
}
