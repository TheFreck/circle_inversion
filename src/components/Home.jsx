import { useCallback, useEffect, useState } from 'react'
import PointsCircle from './PointsCircle';
import PointsSquare from './PointsSquare';
import PointsGrid from './PointsGrid';
import PointsTriangle from './PointsTriangle';
import PointPairs from './PointPairs';
import FormControls from './FormControls';
import ProjectionCircle from './ProjectionCircle';

const styles = {
  referenceButton: {
    background: "#596a01",
    color: "white"
  },
  circleButton: {
    background: "green",
    color: "ivory"
  },
  squareButton: {
    background: "green",
    color: "ivory"
  },
  pointButton: {
    background: "green",
    color: "ivory"
  },
  projectionButton: {
    background: "#596a01",
    color: "ivory"
  },
  leftPanel: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    top: 0,
    bottom: 0,
    left: 0,
    width: "20vw",
    overflow: "auto"
  },
  page: {
    display: "flex",
    position: "relative",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100vw",
    height: "100vh",
    padding: 0,
    margin: 0
  },
  rightPanel: {
    display: "flex",
    position: "relative",
    top: 0,
    right: 0,
    bottom: 0,
    width: "80vw"
  }
}
export const Home = () => {
  const [refCircleX, setRefCircleX] = useState(0); //1
  const [refCircleY, setRefCircleY] = useState(0);  //2
  const [refCircleR, setRefCircleR] = useState(50); //3
  const [circleX, setCircleX] = useState(30);          //4
  const [circleY, setCircleY] = useState(0);        //5
  const [circleR, setCircleR] = useState(20);       //6
  const [squareW, setSquareW] = useState(0); //7
  const [squareH, setSquareH] = useState(0); //8
  const [squareX, setSquareX] = useState(0);
  const [squareY, setSquareY] = useState(0);
  const [tSide1, setTside1] = useState(0); //9
  const [tSide2, setTside2] = useState(0); //10
  const [tSide3, setTside3] = useState(0); //11
  const [triX, setTriX] = useState(0); //12
  const [triY, setTriY] = useState(0); //13
  const [isCircle, setIsCircle] = useState(false);
  const [isTriangle, setIsTriangle] = useState(false);
  const [isSquare, setIsSquare] = useState(false);
  const [innerR, setInnerR] = useState(0);
  const [innerX, setInnerX] = useState(0);
  const [innerY, setInnerY] = useState(0);
  const [isPoint, setIsPoint] = useState(false);
  const [pointX, setPointX] = useState(0);
  const [pointY, setPointY] = useState(0);
  const [multiPoints, setMultiPoints] = useState([]);
  const [isReference, setIsReference] = useState(false);
  const [color, setColor] = useState("");
  const [isProjection, setIsProjection] = useState(false);
  const [projectionX, setProjectionX] = useState(100);
  const [projectionY, setProjectionY] = useState(0);
  const [projectionR, setProjectionR] = useState(20);
  const [invertedX, setInvertedX] = useState(0);
  const [invertedY, setInvertedY] = useState(0);

  useEffect(() => {
    let proX = (refCircleR * refCircleR) / pointX;
    setInvertedX(proX);
    setInvertedY((pointY * proX) / pointX)
  }, [refCircleR, pointX, pointY]);

  const addPoint = () => {
    let points = multiPoints;
    points.push({x:pointX,y:pointY});
    setMultiPoints(points);
    setPointX(0);
    setPointY(0);
  }

  const SvgDisplay = () => <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80vw"
    height="100vh"
    viewBox="-150 -100 300 200"
  >
    <circle cx={refCircleX} cy={refCircleY} r={refCircleR} stroke="red" strokeWidth={.5} />
    <circle cx={refCircleX} cy={refCircleY} r={.1} stroke="red" strokeWidth={.5} />
    {isCircle && <PointsCircle
      cx={refCircleX}
      cy={refCircleY}
      x={circleX}
      y={circleY}
      r={circleR}
      n={100}
      refR={refCircleR}
    />}
    {isSquare && squareH && squareW && <PointsSquare
      cx={refCircleX}
      cy={refCircleY}
      x1={squareX - squareW / 2}
      y1={squareY - squareH / 2}
      x2={squareX + squareW / 2}
      y2={squareY + squareH / 2}
      refR={refCircleR}
      n={1000}
    />}
    {isTriangle && <PointsTriangle
      cx={refCircleX}
      cy={refCircleY}
      x1={innerX - innerR}
      y1={innerY - innerR}
      x2={innerX - innerR}
      y2={innerY + innerR}
      x3={innerX + innerR}
      y3={innerY}
      r={innerR}
      refR={refCircleR}
      n={100}
    />}
    {
      isPoint && <>
        {multiPoints.map((p,i) => (
          <PointPairs
            cx={refCircleX}
            cy={refCircleY}
            x={p.x}
            y={p.y}
            r={refCircleR}
            red={150}
            green={150}
            blue={150}
          />
        ))}
      </>
    }

    {/* {isProjection && <ProjectionCircle
        x1={refCircleX}
        y1={refCircleY}
        r1={refCircleR}
        x2={projectionX}
        y2={projectionY}
        r2={projectionR}
      >
        <PointPairs
          cx={projectionX}
          cy={projectionY}
          x={(projectionR*projectionR*projectionY)/(projectionX*projectionX+projectionY*projectionY)}
          y={projectionY+refCircleY}
          r={projectionR}
          red={200}
          green={200}
          blue={200}
        />
        { console.log("home x1: ", refCircleX) }
        { console.log("home y1: ", refCircleY) }
        { console.log("home r1: ", refCircleR) }
        {console.log("home x2: ", projectionX)}
        {console.log("home y2: ", projectionY)}
        {console.log("home r2: ", projectionR)}
      </ProjectionCircle>
      } */}
  </svg>;

  return (
    <div style={styles.page}>
      <div
        style={styles.leftPanel}
      >
        {/* <input type="color" onChange={(c) => setColor(c.target.value)} /> */}
        {/* <div>{color}</div> */}
        <h2>Shapes</h2>
        <button style={styles.referenceButton} onClick={() => setIsReference(!isReference)}>Reference Circle</button>
        {isReference &&
          <FormControls.CircleControls
            setCircleX={setRefCircleX}
            circleX={refCircleX}
            setCircleY={setRefCircleY}
            circleY={refCircleY}
            setCircleR={setRefCircleR}
            circleR={refCircleR}
          />}
        <br />
        <button style={styles.circleButton} label="circle" onClick={() => setIsCircle(!isCircle)}>Circle</button>
        {isCircle &&
          <FormControls.CircleControls
            setCircleX={setCircleX}
            circleX={circleX}
            setCircleY={setCircleY}
            circleY={circleY}
            setCircleR={setCircleR}
            circleR={circleR}
          />}
        <br />
        {/*<button onClick={() => setIsTriangle(!isTriangle)} >Triangle</button>*/}
        {isTriangle &&
          <FormControls.TriangleControls
          />}
        <button style={styles.squareButton} onClick={() => setIsSquare(!isSquare)} >Square</button>
        {isSquare &&
          <FormControls.SquareControls
            setSquareW={setSquareW}
            squareW={squareW}
            setSquareH={setSquareH}
            squareH={squareH}
            setSquareX={setSquareX}
            squareX={squareX}
            setSquareY={setSquareY}
            squareY={squareY}
          />}
        <br />
        <button style={styles.pointButton} onClick={() => setIsPoint(!isPoint)} >Point</button>
        {isPoint && <>
          <FormControls.PointControls
            setPointX={setPointX}
            pointX={pointX}
            setPointY={setPointY}
            pointY={pointY}
            addPoint={addPoint}
            points={multiPoints}
          />
          <br />
          {/* <button style={styles.projectionButton} onClick={() => setIsProjection(!isProjection)} >Projection Circle</button> */}
          {isProjection && <>
            <label>X: </label>
            <input type="number" value={projectionX} onChange={(x) => setProjectionX(parseInt(x.target.value))} />
            <label>Y: </label>
            <input type="number" value={projectionY} onChange={(y) => setProjectionY(parseInt(y.target.value))} />
            <label>R: </label>
            <input type="number" value={projectionR} onChange={(r) => setProjectionR(parseInt(r.target.value))} />
          </>}
        </>
        }
      </div>
      <div
        style={styles.rightPanel}
      >
        <SvgDisplay />
      </div>
    </div>
  );
}

export default Home;