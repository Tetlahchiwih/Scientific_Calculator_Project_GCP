Proyecto: Calculadora Científica en la Nube
Este proyecto consiste en una calculadora científica desarrollada con HTML, CSS y JavaScript, desplegada en Google Cloud.

Implementación en Google Cloud Platform (GCP)
Creación del Bucket:

Navegamos a Cloud Storage > Buckets.
Creamos un bucket con un nombre relacionado a nuestra aplicación.
Seleccionamos la ubicación multi-región por su alta disponibilidad y redundancia.
Elegimos la clase de almacenamiento Standard para optimizar el rendimiento y la frecuencia de acceso.
Configuración del Bucket:

Control de acceso: Acceso uniforme para simplificar la gestión de permisos.

Protección de datos:

Soft delete policy: Habilitada (7 días).
Control de versiones de objetos: Inhabilitado.
Política de retención del bucket: Inhabilitado.
Retención de objetos: Inhabilitado.
Tipo de encriptación: Administrada por Google.
Hacemos clic en Crear.

Gestión de Permisos:

Vamos a la sección de permisos del bucket.
Removemos la prevención de acceso público.
Reconfiguramos el control de acceso a Fine-grained para gestionar permisos detalladamente.
Subida de Archivos:

Seleccionamos nuestro bucket y subimos los archivos de la calculadora científica.
Generamos una URL pública para el archivo index.html para hacer accesible nuestra aplicación.

Finalmente, nuestra calculadora científica estará disponible públicamente en Internet.

https://storage.googleapis.com/scientific-calculator/index.html



