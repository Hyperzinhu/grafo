let estadoFinal;
let newEstado;
let qtyEstado;
let palavra;
let abcw;
let Matrix;

$("#matrix-submit").on("click", function () {
    op = parseInt($("input[name='matrix-source']:checked").val());
    console.log("\033[H\033[2J");

    switch (op) {
        case 1:
            
            console.log("Digite o alfabeto desejado: ");
            rl.question("", abcw => {
                console.log("Quantos estados terá? ");
                rl.question("", qtyEstado => {
                    qtyEstado = parseInt(qtyEstado);
                    rl.close();
                    Matrix = new Array(qtyEstado).fill().map(() => new Array(abcw.length).fill());

                    Matrix = createMatrix(Matrix, abcw);

                    console.log("Digite o estado final (caso tenha mais, separe-os por virgula): ");
                    rl.question("", estadoFinal => {
                        estadoFinal = estadoFinal.split(",").map(Number);
                        console.log("O(s) estado(s) final(is) é(são): " + estadoFinal);
                    });
                });
            });
            break;
        case 2:
            console.log("Digite uma palavra: ");
            rl.question("", palavra => {
                rl.close();
                const ch = palavra.split("");

                if (palavraInAbcw(ch, abcw)) {
                    if (verifyAbcw(ch, abcw, Matrix, 0, 0))
                        console.log("Palavra válida!");
                    else
                        console.log("Palavra inválida!");
                } else
                    console.log("Palavra contém caracteres que não estão no abcw");
            });
            break;
        case 3:
            for (let i = 0; i < Matrix.length; i++) {
                for (let j = 0; j < Matrix[i].length; j++) {
                    console.log(Matrix[i][j]);
                }
                console.log();
            }
            break;
        case 4:
            rl.close();
            process.exit();
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
    function verifyAbcw(ch, abcw, matrix, estado, charIndex) {
        try {
            for (var i = 0; i < matrix[estado].length; i++) {
                if (ch[charIndex] == abcw.charAt(i)) {
                    newEstado = matrix[estado][i];
                }
            }
            verifyAbcw(ch, abcw, matrix, newEstado, charIndex + 1);
        } catch (e) {
        }
        for (var ef of estadoFinal) {
            if (newEstado == ef) {
                return true;
            }
        }
        return false;
    }

    function createMatrix(matrix, abcw, scan) {
        for (var i = 0; i < (qtyEstado); i++) {
            console.log("Estado " + i);
            for (var j = 0; j < abcw.length(); j++) {
                console.log("Digite o estado para " + abcw.charAt(j));
                matrix[i][j] = scan.nextInt();
            }
        }

        return matrix;
    }

    function palavraInAbcw(ch, abcw) {
        for (var c of ch) {
            if (abcw.indexOf(c) == -1) {
                return false;
            }
        }
        return true;
    }

    function clearScreen() {
        console.log("\033[H\033[2J");
        console.log.flush();
    }
});

