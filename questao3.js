<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Questao 04</title>
</head>
<body>

    <style>
        #box {
            background: yellow;
            width: 200px;
            height: 200px;
            position: relative;
        }
    </style>

    <div id="box"></div>

    <script>
        var div = document.getElementById('box');
        var inicio = 0;
        var diagonalizar = function(posicao){
            div.style.top = posicao+'px';
            div.style.left = posicao+'px';
        }
        
        var tempo = setInterval(function(){
            if (inicio < 100)
                diagonalizar(inicio++);
            else
                clearInterval(tempo);
        }, 10);

    </script>

</body>
</html>