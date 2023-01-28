import pandas
# Se lee el archivo
xlsx = pandas.ExcelFile('archive.xlsx')
# Se obtiene los datos de la primera hoja
dataframe = xlsx.parse('Sheet1')

# Se obtiene la columna en formato Series
emails = dataframe.iloc[:,1]
# Se obtiene los datos transformados a Lista
lista_emails = emails.tolist()

# Se imprime la información obtenida
print(emails)
print(lista_emails)