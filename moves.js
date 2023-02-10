
  /****************************\
           Constants   
  \****************************/
   
  let pgnContainer = document.getElementById('pgnList');
  var moveNumber = 0
  var colorMoveNumber = 0
  let capture = 0
  let error = 0
  let castleMoveWrite = 0
  let pawnCaptureMoveWrite = "a"
  let enPassantPointer = null
  let enPassantCounter = 0
  let enPassantMoveWrite = 0
  let enPassantSaver = null

  
  /****************************\
           Piece Objects   
  \****************************/
const wp1 = {
  pic : document.getElementById('wp1'),
  square: a2,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0,
  color: "white"
}
const wp2 = {
  pic : document.getElementById('wp2'),
  square: b2,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0,
  color: "white"        
}
const wp3 = {
  pic : document.getElementById('wp3'),
  square: c2,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0,  
  color: "white"      
}
const wp4 = {
  pic : document.getElementById('wp4'),
  square: d2,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0,     
  color: "white"    
}
const wp5 = {
  pic : document.getElementById('wp5'),
  square: e2,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0,      
  color: "white"   
}
const wp6 = {
  pic : document.getElementById('wp6'),
  square: f2,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0,    
  color: "white"     
}
const wp7 = {
  pic : document.getElementById('wp7'),
  square: g2,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0,     
  color: "white"    
}
const wp8 = {
  pic : document.getElementById('wp8'),
  square: h2,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0,   
  color: "white"      
}

const wr1 = {
  pic : document.getElementById('wr1'),
  square: a1,
  pgnName: "R",        
  type: "rook", start: 1,  
  color: "white"
}
const wkn1 = {
  pic : document.getElementById('wkn1'),
  square: b1,
  pgnName: "N",        
  type: "knight",
  color: "white"         
}
const wb1 = {
  pic : document.getElementById('wb1'),
  square: c1,
  pgnName: "B",        
  type: "bishop",
  color: "white"         
}
const wq1 = {
  pic : document.getElementById('wq1'),
  square: d1,
  pgnName: "Q",        
  type: "queen",
  color: "white"         
}
const wk1 = {
  pic : document.getElementById('wk1'),
  square: e1,
  pgnName: "K",        
  type: "king", start: 1, 
  color: "white"         
}
const wb2 = {
  pic : document.getElementById('wb2'),
  square: f1,
  pgnName: "B",        
  type: "bishop",
  color: "white"         
}
const wkn2 = {
  pic : document.getElementById('wkn2'),
  square: g1,
  pgnName: "N",        
  type: "knight",
  color: "white"         
}
const wr2 = {
  pic : document.getElementById('wr2'),
  square: h1,
  pgnName: "R",        
  type: "rook", start: 1, 
  color: "white"         
}

    
const bp1 = {
  pic : document.getElementById('bp1'),
  square: a7,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0,  
  color: "black"
}
const bp2 = {
  pic : document.getElementById('bp2'),
  square: b7,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0,
  color: "black"         
}
const bp3 = {
  pic : document.getElementById('bp3'),
  square: c7,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0,  
  color: "black"       
}
const bp4 = {
  pic : document.getElementById('bp4'),
  square: d7,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0,
  color: "black"         
}
const bp5 = {
  pic : document.getElementById('bp5'),
  square: e7,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0,  
  color: "black"       
}
const bp6 = {
  pic : document.getElementById('bp6'),
  square: f7,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0,  
  color: "black"       
}
const bp7 = {
  pic : document.getElementById('bp7'),
  square: g7,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0,     
  color: "black"    
}
const bp8 = {
  pic : document.getElementById('bp8'),
  square: h7,
  pgnName: " ",        
  type: "pawn", start: 1, enPassant: 0, 
  color: "black"        
}
const br1 = {
  pic : document.getElementById('br1'),
  square: a8,
  pgnName: "R",        
  type: "rook", start: 1, 
  color: "black" 
}
const bkn1 = {
  pic : document.getElementById('bkn1'),
  square: b8,
  pgnName: "N",        
  type: "knight",
  color: "black"         
}
const bb1 = {
  pic : document.getElementById('bb1'),
  square: c8,
  pgnName: "B",        
  type: "bishop",
  color: "black"         
}
const bq1 = {
  pic : document.getElementById('bq1'),
  square: d8,
  pgnName: "Q",        
  type: "queen",
  color: "black"         
}
const bk1 = {
  pic : document.getElementById('bk1'),
  square: e8,
  pgnName: "K",        
  type: "king", start: 1, 
  color: "black"         
}
const bb2 = {
  pic : document.getElementById('bb2'),
  square: f8,
  pgnName: "B",        
  type: "bishop",
  color: "black"         
}
const bkn2 = {
  pic : document.getElementById('bkn2'),
  square: g8,
  pgnName: "N",        
  type: "knight",
  color: "black"         
}
const br2 = {
  pic : document.getElementById('br2'),
  square: h8,
  pgnName: "R",        
  type: "rook", start: 1, 
  color: "black"         
}
 /****************************\
           Square Array   
  \****************************/

/*let chessSquares = [
  a8,b8,c8,d8,e8,f8,g8,h8,
  a7,b7,c7,d7,e7,f7,g7,h7,
  a6,b6,c6,d6,e6,f6,g6,h6,
  a5,b5,c5,d5,e5,f5,g5,h5,
  a4,b4,c4,d4,e4,f4,g4,h4,
  a3,b3,c3,d3,e3,f3,g3,h3,
  a2,b2,c2,d2,e2,f2,g2,h2,
  a1,b1,c1,d1,e1,f1,g1,h1
]*/

const chessMap = new Map([
[a8,br1],[b8,bkn1],[c8,bb1],[d8,bq1],[e8,bk1],[f8,bb2],[g8,bkn2],[h8,br2],
[a7,bp1],[b7,bp2],[c7,bp3],[d7,bp4],[e7,bp5],[f7,bp6],[g7,bp7],[h7,bp8],
[a6,0],[b6,0],[c6,0],[d6,0],[e6,0],[f6,0],[g6,0],[h6,0],
[a5,0],[b5,0],[c5,0],[d5,0],[e5,0],[f5,0],[g5,0],[h5,0],
[a4,0],[b4,0],[c4,0],[d4,0],[e4,0],[f4,0],[g4,0],[h4,0],
[a3,0],[b3,0],[c3,0],[d3,0],[e3,0],[f3,0],[g3,0],[h3,0],
[a2,wp1],[b2,wp2],[c2,wp3],[d2,wp4],[e2,wp5],[f2,wp6],[g2,wp7],[h2,wp8],
[a1,wr1],[b1,wkn1],[c1,wb1],[d1,wq1],[e1,wk1],[f1,wb2],[g1,wkn2],[h1,wr2]
])











  /****************************\
           Functions   
  \****************************/
    function allowDrop(ev) {
      ev.preventDefault()
    }
    
    function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id)
      
    }
    
    function drop(ev) {
      ev.preventDefault()
      var data = ev.dataTransfer.getData("text")
      
      temp = document.getElementById(data);
      currentPiece = findPiece(temp);

      if((moveNumber%2 == 1 && currentPiece.color == "white")  || ((moveNumber%2 == 0 && currentPiece.color == "black"))) {
        return
      }
     
      if(currentPiece.type == "pawn") {
        if(pawnMoves(currentPiece, ev) == false) {
          return
        }
        enPassantSaver = currentPiece.square
      }
      if(currentPiece.type == "knight") {
        if(knightMoves(currentPiece, ev) == false) { 
          return
        }
      }
      if(currentPiece.type == "rook") {
        if(rookMoves(currentPiece, ev) == false) { 
          return
        }
        currentPiece.start = 0
      }
      if(currentPiece.type == "bishop") {
        if(bishopMoves(currentPiece, ev) == false) { 
          return
        }
      }
      if(currentPiece.type == "queen") {
        if(queenMoves(currentPiece, ev) == false) { 
          return
        }
      }
      if(currentPiece.type == "king") {
        if(kingMoves(currentPiece, ev) == false) { 
          return
        }
        currentPiece.start = 0
      }
     
      
      if(chessMap.get(ev.target)==0) {
        chessMap.set(currentPiece.square, 0)
        chessMap.set(ev.target, currentPiece)
        currentPiece.square = ev.target;
        ev.target.append(document.getElementById(data));
        if(enPassantMoveWrite == 1){
          enPassantWrite(currentPiece)
          enPassantMoveWrite=0
        }else{
        chessMoveWrite(currentPiece)
        }
      }else {
        chessTake(currentPiece,ev,data)
        if(error == 0 ) {chessMoveWrite(currentPiece)}
        error = 0
      }

      if(enPassantCounter == 2) {
      try{enPassantPointer.enPassant = 0}catch(error){}
      enPassantPointer = null
      enPassantCounter = 0   
      }
      enPassantCounter += 1
      document.getElementById("loadSignal").innerHTML = ""
      document.getElementById("loadSignal").innerHTML += "Loading..."  
    }
  
   
    function chessMoveWrite(x) {
    moveNumber +=1

    //white
        if (moveNumber%2 == 1){
         colorMoveNumber +=1

         //castle
         if(castleMoveWrite == 1) {
          if(x.square = g1) {
            pgnContainer.innerHTML += colorMoveNumber + "." + " " + "O-O" + " "
            castleMoveWrite = 0
          }else{
            pgnContainer.innerHTML += colorMoveNumber + "." + " " + "O-O-O" + " "
            castleMoveWrite = 0
          }
         } else {

         pgnContainer.innerHTML += colorMoveNumber + "." +" "+ x.pgnName  
         
         //capture
         if(capture==1){
          if(x.type=="pawn"){
            pgnContainer.innerHTML += pawnCaptureMoveWrite
          } 
          pgnContainer.innerHTML +="x"
        }
         pgnContainer.innerHTML += x.square.id + "  "
         capture = 0
         }
        } else {
        //black
        //castle
          if(castleMoveWrite == 1) {
            if(x.square = g8) {
              pgnContainer.innerHTML += "O-O" //+ "<br>" 
              castleMoveWrite = 0
            }else{
              pgnContainer.innerHTML += "O-O-O" //+ "<br>"
              castleMoveWrite = 0
            }
          } else {
          pgnContainer.innerHTML += x.pgnName 
          //capture
          if(capture==1){
            if(x.type=="pawn"){
              pgnContainer.innerHTML += pawnCaptureMoveWrite
            } 
            pgnContainer.innerHTML +="x"
          } 
          pgnContainer.innerHTML += x.square.id + " "//"<br>" space was not there before
          capture = 0
        }  
    }
  }


    function findPiece(data) {
    if(data == wp1.pic) { 
      
      return wp1
    }else if(data == wp2.pic) { 
      
      return wp2
    }else if(data == wp3.pic) { 
      
      return wp3
    }else if(data == wp4.pic) { 
      
      return wp4
    }else if(data == wp5.pic) { 
      
      return wp5
    }else if(data == wp6.pic) { 
      
      return wp6
    }else if(data == wp7.pic) { 
      
      return wp7
    }else if(data == wp8.pic) { 
      
      return wp8


    }else if(data == bp1.pic) { 
      
      return bp1
    }else if(data == bp2.pic) { 
      
      return bp2
    }else if(data == bp3.pic) { 
      
      return bp3
    }else if(data == bp4.pic) { 
      
      return bp4
    }else if(data == bp5.pic) { 
      
      return bp5
    }else if(data == bp6.pic) { 
      
      return bp6
    }else if(data == bp7.pic) { 
      
      return bp7
    }else if(data == bp8.pic) { 
      
      return bp8



    }else if(data == wr1.pic) { 
      
      return wr1
    }else if(data == wkn1.pic) { 
      
      return wkn1
    }else if(data == wb1.pic) { 
      
      return wb1
    }else if(data == wq1.pic) { 
      
      return wq1
    }else if(data == wk1.pic) { 
      
      return wk1
    }else if(data == wb2.pic) { 
      
      return wb2
    }else if(data == wkn2.pic) { 
      
      return wkn2
    }else if(data == wr2.pic) { 
      
      return wr2


    }else if(data == br1.pic) { 
      
      return br1
    }else if(data == bkn1.pic) { 
      
      return bkn1
    }else if(data == bb1.pic) { 
      
      return bb1
    }else if(data == bq1.pic) { 
      
      return bq1
    }else if(data == bk1.pic) { 
      
      return bk1
    }else if(data == bb2.pic) { 
      
      return bb2
    }else if(data == bkn2.pic) { 
      
      return bkn2
    }else if(data == br2.pic) { 
      
      return br2
    }
    }

   function chessTake(currentPiece,ev,data) {
    takePiece = findPiece(ev.target)
    if(currentPiece == takePiece) {
      error = 1;
      return
    } else if(currentPiece.color == takePiece.color){
      error = 1;
      return
    } else if(takePiece.type == "king"){
      error = 1;
      return
    } else if(currentPiece.type == "pawn") {
      pawnCaptureMoveWrite = chessColumnMap.get(currentPiece.square)
    }      
      takeSquare = takePiece.square
      const s = takePiece.pic.id
      t = document.getElementById(s)
      t.remove();
      chessMap.set(currentPiece.square, 0)
      
      currentPiece.square = takeSquare;
      chessMap.set(takeSquare, currentPiece)
      takeSquare.append(document.getElementById(data))
      capture = 1;
    }



   
   
  const chessMoveMap = new Map([
    [a8,18],[b8,28],[c8,38],[d8,48],[e8,58],[f8,68],[g8,78],[h8,88],
    [a7,17],[b7,27],[c7,37],[d7,47],[e7,57],[f7,67],[g7,77],[h7,87],
    [a6,16],[b6,26],[c6,36],[d6,46],[e6,56],[f6,66],[g6,76],[h6,86],
    [a5,15],[b5,25],[c5,35],[d5,45],[e5,55],[f5,65],[g5,75],[h5,85],
    [a4,14],[b4,24],[c4,34],[d4,44],[e4,54],[f4,64],[g4,74],[h4,84],
    [a3,13],[b3,23],[c3,33],[d3,43],[e3,53],[f3,63],[g3,73],[h3,83],
    [a2,12],[b2,22],[c2,32],[d2,42],[e2,52],[f2,62],[g2,72],[h2,82],
    [a1,11],[b1,21],[c1,31],[d1,41],[e1,51],[f1,61],[g1,71],[h1,81]
    ])


   
    function pawnMoves(chessPiece,ev) {
      pSQTemp = chessPiece.square
      p1Temp = chessMoveMap.get(pSQTemp)
      p2Temp = chessMoveMap.get(ev.target)

      pLPassant = p1Temp - 10
      pRPassant = p1Temp + 10
      

      p2oPiece = findPiece(ev.target)
      p2oTemp = getByValue(chessMap, p2oPiece)
      p2o = chessMoveMap.get(p2oTemp)
      
      

      if(chessPiece.color == "white"){
        pfrontSQCheck = p1Temp + 1
        frontCheck = chessMap.get(getByValue(chessMoveMap, pfrontSQCheck))
        if(p1Temp + 1 == p2Temp && p2o == null) {
          chessPiece.start = 0
          return true 
        } else if(p1Temp + 2 == p2Temp && p2o == null && chessPiece.start == 1  && frontCheck == 0) {
          chessPiece.start = 0
          chessPiece.enPassant = 1
          enPassantPointer = chessPiece
          return true
        } else if(p1Temp - 9 == p2o && p2Temp == null) {
          chessPiece.start = 0
          return true
        } else if (p1Temp + 11 == p2o && p2Temp == null) {
          chessPiece.start = 0
          return true
        //Enpassant  
        } else if(p1Temp - 9 == p2Temp  && p2oPiece == null && chessRowMap.get(pSQTemp) == 1 && chessMap.get(getByValue(chessMoveMap, pLPassant)) == enPassantPointer && enPassantPointer.enPassant == 1){
          enPassantMoveWrite = 1
          return true       
        } else if(p1Temp + 11 == p2Temp  && p2oPiece == null && chessRowMap.get(pSQTemp) == 1 && chessMap.get(getByValue(chessMoveMap, pRPassant)) == enPassantPointer && enPassantPointer.enPassant == 1) {
          enPassantMoveWrite = 1
          return true
        } else {
          return false
        }

      } else if(chessPiece.color == "black") { ////////////////////////Black
        pfrontSQCheck = p1Temp - 1 
        frontCheck = chessMap.get(getByValue(chessMoveMap, pfrontSQCheck))
        
        if(p1Temp - 1 == p2Temp && p2o == null) {
          chessPiece.start = 0
          return true 
        } else if(p1Temp - 2 == p2Temp && p2o == null && chessPiece.start == 1  && frontCheck == 0) {
          chessPiece.start = 0
          chessPiece.enPassant = 1
          enPassantPointer = chessPiece
          return true
        } else if(p1Temp + 9 == p2o && p2Temp == null) {
          chessPiece.start = 0
          return true
        } else if (p1Temp - 11 == p2o && p2Temp == null) {
          chessPiece.start = 0
          return true
          //Enpassant  
        } else if(p1Temp - 11 == p2Temp  && p2oPiece == null && chessRowMap.get(pSQTemp) == 2 && chessMap.get(getByValue(chessMoveMap, pLPassant)) == enPassantPointer && enPassantPointer.enPassant == 1){
          enPassantMoveWrite = 1
          return true       
        } else if(p1Temp + 9 == p2Temp  && p2oPiece == null && chessRowMap.get(pSQTemp) == 2 && chessMap.get(getByValue(chessMoveMap, pRPassant)) == enPassantPointer && enPassantPointer.enPassant == 1) {
          enPassantMoveWrite = 1
          return true
        }else {
          return false
        }
      
      }
    }


    function getByValue(map, searchValue) {
      for (let [key, value] of map.entries()) {
        if (value === searchValue)
          return key;
      }
    }

    function knightMoves(chessPiece,ev) {
      nSQTemp = chessPiece.square
      n1Temp = chessMoveMap.get(nSQTemp)
      n2Temp = chessMoveMap.get(ev.target)
      
      //If n2temp is null
      n2oPiece = findPiece(ev.target)
      n2oTemp = getByValue(chessMap, n2oPiece)
      n2o = chessMoveMap.get(n2oTemp)

      if(n1Temp - 8 == n2Temp || n1Temp - 8 == n2o) {
        return true
      } else if(n1Temp + 8 == n2Temp || n1Temp + 8 == n2o) {
        return true
      } else if(n1Temp - 12 == n2Temp || n1Temp - 12 == n2o) {
        return true
      } else if(n1Temp - 19 == n2Temp || n1Temp - 19 == n2o) {
        return true
      } else if(n1Temp - 21 == n2Temp || n1Temp - 21 == n2o) {
        return true
      } else if(n1Temp + 12 == n2Temp || n1Temp + 12 == n2o) {
        return true
      } else if(n1Temp + 21 == n2Temp || n1Temp + 21 == n2o) {
        return true
      } else if(n1Temp + 19 == n2Temp || n1Temp + 19 == n2o) {
        return true
      } else {
        return false
      }
    }

    function rookMoves(chessPiece,ev) {
      rSQTemp = chessPiece.square
      r1Temp = chessMoveMap.get(rSQTemp)
      r2Temp = chessMoveMap.get(ev.target)


      //if r2Temp is null
      r2oPiece = findPiece(ev.target)
      r2oTemp = getByValue(chessMap, r2oPiece)
      r2o = chessMoveMap.get(r2oTemp)
      let rxpO = 0
      let rxnO = 0
      let rypO = 0
      let rynO = 0
      
      //rxpO
      for(let x = 1; x < 8; x++) {
        rxpO = r1Temp + (10*x)
          if(chessMap.get(getByValue(chessMoveMap,rxpO)) == 0 && rxpO == r2Temp) {
            return true
          } 
          if(chessMap.get(getByValue(chessMoveMap,rxpO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,r2o)) == (chessMap.get(getByValue(chessMoveMap,rxpO))) && r2o !=null) {
              return true
            } else
            break
          }
      }

      //rxnO
      for(let x = 1; x < 8; x++) {
        rxnO = r1Temp - (10*x)
          if(chessMap.get(getByValue(chessMoveMap,rxnO)) == 0 && rxnO == r2Temp) {
            return true
          } 
          if(chessMap.get(getByValue(chessMoveMap,rxnO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,r2o)) == (chessMap.get(getByValue(chessMoveMap,rxnO))) && r2o !=null) {
              return true
            } else
            break
          } 
      }
      
      //rypO
      for(let y = 1; y < 8; y++) {
        rypO = r1Temp + (y)
          if(chessMap.get(getByValue(chessMoveMap,rypO)) == 0 && rypO == r2Temp) {
            return true
          } 
          if(chessMap.get(getByValue(chessMoveMap,rypO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,r2o)) == (chessMap.get(getByValue(chessMoveMap,rypO))) && r2o !=null) {
              return true
            } else
            break
          }
      }
      

      //rynO
      for(let y = 1; y < 8; y++) {
        rynO = r1Temp - (y)
          if(chessMap.get(getByValue(chessMoveMap,rynO)) == 0 && rynO == r2Temp) {
            return true
          } 
        
          if(chessMap.get(getByValue(chessMoveMap,rynO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,r2o)) == (chessMap.get(getByValue(chessMoveMap,rynO))) && r2o !=null) {
              return true
            } else
            break
          }
      }

      

      return false
    }

    function bishopMoves(chessPiece,ev) {
      bSQTemp = chessPiece.square
      b1Temp = chessMoveMap.get(bSQTemp)
      b2Temp = chessMoveMap.get(ev.target)


      //if b2Temp is null
      b2oPiece = findPiece(ev.target)
      b2oTemp = getByValue(chessMap, b2oPiece)
      b2o = chessMoveMap.get(b2oTemp)
      let bxpO = 0
      let bxnO = 0
      let bypO = 0
      let bynO = 0
      
      //bxpO
      for(let x = 1; x < 8; x++) {
        bxpO = b1Temp + (11*x)
          if(chessMap.get(getByValue(chessMoveMap,bxpO)) == 0 && bxpO == b2Temp) {
            return true
          } 
          if(chessMap.get(getByValue(chessMoveMap,bxpO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,b2o)) == (chessMap.get(getByValue(chessMoveMap,bxpO))) && b2o !=null) {
              return true
            } else
            break
          }
      }

      //bxnO
      for(let x = 1; x < 8; x++) {
        bxnO = b1Temp - (11*x)
          if(chessMap.get(getByValue(chessMoveMap,bxnO)) == 0 && bxnO == b2Temp) {
            return true
          } 
          if(chessMap.get(getByValue(chessMoveMap,bxnO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,b2o)) == (chessMap.get(getByValue(chessMoveMap,bxnO))) && b2o !=null) {
              return true
            } else
            break
          } 
      }
      
      //bypO
      for(let y = 1; y < 8; y++) {
        bypO = b1Temp + (y*9)
          if(chessMap.get(getByValue(chessMoveMap,bypO)) == 0 && bypO == b2Temp) {
            return true
          } 
          if(chessMap.get(getByValue(chessMoveMap,bypO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,b2o)) == (chessMap.get(getByValue(chessMoveMap,bypO))) && b2o !=null) {
              return true
            } else
            break
          }
      }
      

      //bynO
      for(let y = 1; y < 8; y++) {
        bynO = b1Temp - (y*9)
          if(chessMap.get(getByValue(chessMoveMap,bynO)) == 0 && bynO == b2Temp) {
            return true
          } 
        
          if(chessMap.get(getByValue(chessMoveMap,bynO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,b2o)) == (chessMap.get(getByValue(chessMoveMap,bynO))) && b2o !=null) {
              return true
            } else
            break
          }
      }

      

      return false
    }

    function queenMoves(chessPiece,ev) {
      qSQTemp = chessPiece.square
      q1Temp = chessMoveMap.get(qSQTemp)
      q2Temp = chessMoveMap.get(ev.target)


      //if r2Temp is null
      q2oPiece = findPiece(ev.target)
      q2oTemp = getByValue(chessMap, q2oPiece)
      q2o = chessMoveMap.get(q2oTemp)
      let rxpO = 0
      let rxnO = 0
      let rypO = 0
      let rynO = 0

      let bxpO = 0
      let bxnO = 0
      let bypO = 0
      let bynO = 0
      
      //rxpO
      for(let x = 1; x < 8; x++) {
        rxpO = q1Temp + (10*x)
          if(chessMap.get(getByValue(chessMoveMap,rxpO)) == 0 && rxpO == q2Temp) {
            return true
          } 
          if(chessMap.get(getByValue(chessMoveMap,rxpO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,q2o)) == (chessMap.get(getByValue(chessMoveMap,rxpO))) && q2o !=null) {
              return true
            } else
            break
          }
      }

      //rxnO
      for(let x = 1; x < 8; x++) {
        rxnO = q1Temp - (10*x)
          if(chessMap.get(getByValue(chessMoveMap,rxnO)) == 0 && rxnO == q2Temp) {
            return true
          } 
          if(chessMap.get(getByValue(chessMoveMap,rxnO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,q2o)) == (chessMap.get(getByValue(chessMoveMap,rxnO))) && q2o !=null) {
              return true
            } else
            break
          } 
      }
      
      //rypO
      for(let y = 1; y < 8; y++) {
        rypO = q1Temp + (y)
          if(chessMap.get(getByValue(chessMoveMap,rypO)) == 0 && rypO == q2Temp) {
            return true
          } 
          if(chessMap.get(getByValue(chessMoveMap,rypO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,q2o)) == (chessMap.get(getByValue(chessMoveMap,rypO))) && q2o !=null) {
              return true
            } else
            break
          }
      }
      

      //rynO
      for(let y = 1; y < 8; y++) {
        rynO = q1Temp - (y)
          if(chessMap.get(getByValue(chessMoveMap,rynO)) == 0 && rynO == q2Temp) {
            return true
          } 
        
          if(chessMap.get(getByValue(chessMoveMap,rynO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,q2o)) == (chessMap.get(getByValue(chessMoveMap,rynO))) && q2o !=null) {
              return true
            } else
            break
          }
      }

       //bxpO
       for(let x = 1; x < 8; x++) {
        bxpO = q1Temp + (11*x)
          if(chessMap.get(getByValue(chessMoveMap,bxpO)) == 0 && bxpO == q2Temp) {
            return true
          } 
          if(chessMap.get(getByValue(chessMoveMap,bxpO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,q2o)) == (chessMap.get(getByValue(chessMoveMap,bxpO))) && q2o !=null) {
              return true
            } else
            break
          }
      }

      //bxnO
      for(let x = 1; x < 8; x++) {
        bxnO = q1Temp - (11*x)
          if(chessMap.get(getByValue(chessMoveMap,bxnO)) == 0 && bxnO == q2Temp) {
            return true
          } 
          if(chessMap.get(getByValue(chessMoveMap,bxnO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,q2o)) == (chessMap.get(getByValue(chessMoveMap,bxnO))) && q2o !=null) {
              return true
            } else
            break
          } 
      }
      
      //bypO
      for(let y = 1; y < 8; y++) {
        bypO = q1Temp + (y*9)
          if(chessMap.get(getByValue(chessMoveMap,bypO)) == 0 && bypO == q2Temp) {
            return true
          } 
          if(chessMap.get(getByValue(chessMoveMap,bypO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,q2o)) == (chessMap.get(getByValue(chessMoveMap,bypO))) && q2o !=null) {
              return true
            } else
            break
          }
      }
      

      //bynO
      for(let y = 1; y < 8; y++) {
        bynO = q1Temp - (y*9)
          if(chessMap.get(getByValue(chessMoveMap,bynO)) == 0 && bynO == q2Temp) {
            return true
          } 
        
          if(chessMap.get(getByValue(chessMoveMap,bynO)) != 0) {
            if (chessMap.get(getByValue(chessMoveMap,q2o)) == (chessMap.get(getByValue(chessMoveMap,bynO))) && q2o !=null) {
              return true
            } else
            break
          }
      }
      return false

      

      
    }

    function kingMoves(chessPiece,ev) {
      kSQTemp = chessPiece.square
      k1Temp = chessMoveMap.get(kSQTemp)
      k2Temp = chessMoveMap.get(ev.target)


      //if k2Temp is null
      k2oPiece = findPiece(ev.target)
      k2oTemp = getByValue(chessMap, k2oPiece)
      k2o = chessMoveMap.get(k2oTemp)

 
      //+1 -1  -10 +10  -9 +9 +11 -11
      if(k1Temp - 1 == k2Temp || k1Temp - 1 == k2o) {
        return true
      } else if(k1Temp + 1 == k2Temp || k1Temp + 1 == k2o) {
        return true
      } else if(k1Temp - 10 == k2Temp || k1Temp - 10 == k2o) {
        return true
      } else if(k1Temp + 10 == k2Temp || k1Temp + 10 == k2o) {
        return true
      } else if(k1Temp - 9 == k2Temp || k1Temp - 9 == k2o) {
        return true
      } else if(k1Temp + 9 == k2Temp || k1Temp + 9 == k2o) {
        return true
      } else if(k1Temp - 11 == k2Temp || k1Temp - 11 == k2o) {
        return true
      } else if(k1Temp + 11 == k2Temp || k1Temp + 11 == k2o) {
        return true
      } else {
        if(chessPiece.start == 1) {
          if(castle(chessPiece, k1Temp, k2Temp) == true) {
            castleMoveWrite = 1
            return true
          }
        }
        
       
        return false
      }
    }

    function castle(chessPiece, k1Temp, k2Temp){
      if(chessPiece.color = "white"){
        //white short castle
        if(k1Temp + 20 == 71 && k2Temp == 71 && chessPiece.start == 1 && chessMap.get(f1) == 0 && chessMap.get(g1) == 0) {
         if(chessMap.get(h1).start == 1) {
          document.getElementById("f1").append(document.getElementById("wr2"))
          chessMap.set(f1, wr2)
          chessMap.set(e1, 0)
          chessMap.set(h1, 0)



          wr2.start = 0
          return true
         }
          
        }
        //white long castle
        if(k1Temp - 20 == 31 && k2Temp == 31 && chessPiece.start == 1) {
          if(chessMap.get(a1).start == 1) {
            document.getElementById("d1").append(document.getElementById("wr1"))
            chessMap.set(d1, wr1)
            chessMap.set(e1, 0)
            chessMap.set(a1, 0)
            
            wr1.start = 0
            return true
        }
      }
    }
      if(chessPiece.color = "black"){
        //black short castle
        if(k1Temp + 20 == 78 && k2Temp == 78) {
          if(chessMap.get(h8).start == 1) {
            document.getElementById("f8").append(document.getElementById("br2"))
            chessMap.set(f8, br2)
            chessMap.set(e8, 0)
            chessMap.set(h8, 0)
            br2.start = 0
            return true
           }


        }
        //black long castle
        if(k1Temp - 20 == 38 && k2Temp == 38) {
          if(chessMap.get(a8).start == 1) {
          document.getElementById("d8").append(document.getElementById("br1"))
            chessMap.set(d8, br1)
            chessMap.set(e8, 0)
            chessMap.set(a8, 0)
            br1.start = 0
            return true
          }
        }
      } 
    }

    function enPassantWrite(currentPiece){
      ePTSTemp = chessMoveMap.get(currentPiece.square)
      enPassantTakeSquare = ePTSTemp - 1
      pawnCaptured = chessMap.get(getByValue(chessMoveMap, enPassantTakeSquare))
      const capturedIMG = pawnCaptured.pic.id
      pawnRemoveTemp = document.getElementById(capturedIMG)
      pawnRemoveTemp.remove() 
      chessMap.set(getByValue(chessMoveMap, enPassantTakeSquare), 0)
      
      epSQWrite = chessColumnMap.get(enPassantSaver)
      enPassantMoveWrite == 0
      //Write
      moveNumber +=1

        //white
        if (moveNumber%2 == 1){
         colorMoveNumber +=1
         pgnContainer.innerHTML += colorMoveNumber + "." +" "+epSQWrite+"x"+currentPiece.square.id+" " 
        }
        //Black
        else {
          pgnContainer.innerHTML += epSQWrite+"x"+currentPiece.square.id+" " //+ "<br>"
        }

        
    }

    const chessColumnMap = new Map([
      [a8,"a"],[b8,"b"],[c8,"c"],[d8,"d"],[e8,"e"],[f8,"f"],[g8,"g"],[h8,"h"],
      [a7,"a"],[b7,"b"],[c7,"c"],[d7,"d"],[e7,"e"],[f7,"f"],[g7,"g"],[h7,"h"],
      [a6,"a"],[b6,"b"],[c6,"c"],[d6,"d"],[e6,"e"],[f6,"f"],[g6,"g"],[h6,"h"],
      [a5,"a"],[b5,"b"],[c5,"c"],[d5,"d"],[e5,"e"],[f5,"f"],[g5,"g"],[h5,"h"],
      [a4,"a"],[b4,"b"],[c4,"c"],[d4,"d"],[e4,"e"],[f4,"f"],[g4,"g"],[h4,"h"],
      [a3,"a"],[b3,"b"],[c3,"c"],[d3,"d"],[e3,"e"],[f3,"f"],[g3,"g"],[h3,"h"],
      [a2,"a"],[b2,"b"],[c2,"c"],[d2,"d"],[e2,"e"],[f2,"f"],[g2,"g"],[h2,"h"],
      [a1,"a"],[b1,"b"],[c1,"c"],[d1,"d"],[e1,"e"],[f1,"f"],[g1,"g"],[h1,"h"]
      ])

    const chessRowMap = new Map([
       [a8,0],[b8,0],[c8,0],[d8,0],[e8,0],[f8,0],[g8,0],[h8,0],
       [a7,0],[b7,0],[c7,0],[d7,0],[e7,0],[f7,0],[g7,0],[h7,0],
       [a6,0],[b6,0],[c6,0],[d6,0],[e6,0],[f6,0],[g6,0],[h6,0],
       [a5,1],[b5,1],[c5,1],[d5,1],[e5,1],[f5,1],[g5,1],[h5,1],
       [a4,2],[b4,2],[c4,2],[d4,2],[e4,2],[f4,2],[g4,2],[h4,2],
       [a3,0],[b3,0],[c3,0],[d3,0],[e3,0],[f3,0],[g3,0],[h3,0],
       [a2,0],[b2,0],[c2,0],[d2,0],[e2,0],[f2,0],[g2,0],[h2,0],
       [a1,0],[b1,0],[c1,0],[d1,0],[e1,0],[f1,0],[g1,0],[h1,0]
       ])








