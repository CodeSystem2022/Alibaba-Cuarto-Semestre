# Profundizando en el tipo float
a = 3.0

# Constyructor del tipo float -> puede recibir int u str
a = float(10) # le pasamosun tipo entero (int)
a = float('10')
print(f'a: {a:.2f}')


# Notación exponencial (valores positivos o negativos)
a = 3e5
print(f'a: {a:.2f}')

a = 3e-5
print(f'a: {a:.5f}')

# Cualquier calculo que incluye un float, todo cambia a float

a = 4.0 + 5
print(a)
print(type(a))
