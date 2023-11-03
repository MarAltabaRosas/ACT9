
La obtención y creación de los posts y de los autores. La url para cada uno de los modelos debe partir con el prefijo /api

GET /api/posts              Recupera todos posts
GET /api/autores            Recupera todos autores
GET /api/autores/IDAUTOR    Recupera 1 autor por ID
GET /api/posts/IDPOST       Recupera 1 post por ID (debe incluir todos los datos del post y todos los datos del autor)
GET /api/posts/IDAUTOR      Recupera todos los posts de un autor en concreto


POST /api/posts             Recibe body de petición los datos de un nuevo post para insertarlo en la BD
POST /api/autores           Recibe body de petición los datos de un nuevo autor para insertarlo en la BD


