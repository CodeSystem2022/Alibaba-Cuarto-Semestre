#  Bool contiene los valores de true y false
# Los tipos numéricos, es false para el 0 (cero),true para los de mas valores
valor = 0.0
resultado  = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor = 0.1
resultado  = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

# Tipo String -> False'', True demas valores
valor = ''
resultado  = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')


valor = 'Hola'
resultado  = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

# Tipo colecciones -> False colecciones vacias
#Tipo colecciones -> True para todas las demas
# Lista
valor = []
resultado  = bool(valor)
print(f'valor  de una lista vacia: {valor}, Resultado: {resultado}')

valor = [2, 3, 4]
resultado  = bool(valor)
print(f'valor de una lista con elementos: {valor}, Resultado: {resultado}')

# Tupla
valor = ()
resultado  = bool(valor)
print(f'valor de una tupla vacia: {valor}, Resultado: {resultado}')

valor = (5,)
resultado  = bool(valor)
print(f'valor de una tupla con elementos: {valor}, Resultado: {resultado}')

# Diccionario
valor = {}
resultado  = bool(valor)
print(f'valor de un Diccionario vacio: {valor}, Resultado: {resultado}')

#valor = {'Nombre': 'Juan','Apellido': 'Perez'}
resultado  = bool(valor)
print(f'valor de un Diccionario con elementos: {valor}, Resultado: {resultado}')

# Sentencias de control bool
if(1,):
    print('Regresa verdadero')
else:
    print('Regresa falso')

# ciclos
variable = 17
while variable:
    print('Regresa verdadero')
    break
else:
    print('Regresa falso')