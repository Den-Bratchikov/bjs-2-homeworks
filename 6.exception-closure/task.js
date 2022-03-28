function parseCount(count) {
    
    let result = Number.parseInt(count)
    
    if (Number.isNaN(result)) {
        throw TypeError ("Невалидное значение");
    } else {
        return result
    }        
}

function validateCount(count) {
    try {
        return parseCount(count)
    } catch (typeError) {
        return typeError
    }
}


class Triangle {
    constructor(a, b, c) {
        if ((a + b < c) || (b + c < a) || (a + c < b)) {
            const err = new TypeError ("Треугольник с такими сторонами не существует")
                        
            throw err
        } else {
            this.a = a
            this.b = b
            this.c = c
        }
    }

    getPerimeter() {
        let perimeter = this.a + this.b + this.c
        return perimeter
    }
                     
    getArea() {
        let p = (this.a + this.b + this.c) / 2
        return Number(Math.sqrt(p * (p-this.a) * (p-this.b) * (p-this.c)).toFixed(3))
    }
}


function getTriangle(a, b, c) {
   
    try {
        return new Triangle (a, b, c)
    } catch (err) {
        const obj = {
            getArea: function() {
                return 'Ошибка! Треугольник не существует'
            },
            
            getPerimeter: function() {
                return 'Ошибка! Треугольник не существует'
            }
        }    
        
        return obj
    }
    
}