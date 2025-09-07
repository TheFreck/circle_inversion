export const FormControls = {
  CircleControls: ({ setCircleX, circleX, setCircleY, circleY, setCircleR, circleR }) => <div>
    <label>X: </label>
    <input type="number" value={circleX} onChange={(x) => setCircleX(parseInt(x.target.value))} />
    <br />
    <label>Y: </label>
    <input type="number" value={circleY} onChange={(y => setCircleY(parseInt(y.target.value)))} />
    <br />
    <label>R: </label>
    <input type="number" value={circleR} onChange={(r => setCircleR(parseInt(r.target.value)))} />
    <br />
  </div>,
  SquareControls: ({setSquareW, squareW, setSquareH, squareH, setSquareX, squareX, setSquareY, squareY}) => <>
    <label>Width</label>
    <br />
    <input type="number" value={squareW} onChange={(w => setSquareW(parseInt(w.target.value)))} />
    <br />
    <label>Height</label>
    <br />
    <input type="number" value={squareH} onChange={(w => setSquareH(parseInt(w.target.value)))} />
    <br />
    <label>X: </label>
    <br />
    <input type="number" value={squareX} onChange={(x) => setSquareX(parseInt(x.target.value))} />
    <br />
    <label>Y: </label>
    <br />
    <input type="number" value={squareY} onChange={(y => setSquareY(parseInt(y.target.value)))} />
  </>,
  TriangleControls: ({setTside1,tSide1,setTside2,tSide2,setTside3,tSide3,setTriX,triX,setTriY,triY}) => <>
    <label>Side1 Length</label>
    <br />
    <input type="number" value={tSide1} onChange={(s1) => s1.target.value ? setTside1(parseInt(s1.target.value)) : 0} />
    <br />
    <label>Side2 Length</label>
    <input type="number" value={tSide2} onChange={(s2) => s2.target.value ? setTside2(parseInt(s2.target.value)) : 0} />
    <br />
    <label>Side3 Length</label>
    <input type="number" value={tSide3} onChange={(s3) => s3.target.value ? setTside3(parseInt(s3.target.value)) : 0} />
    <br />
    <label>Center X</label>
    <input type="number" value={triX} onChange={(x) => x.target.value ? setTriX(parseInt(x.target.value)) : 0} />
    <br />
    <label>Center Y</label>
    <input type="number" value={triY} onChange={(y) => y.target.value ? setTriY(parseInt(y.target.value)) : 0} />
  </>,
  PointControls: ({setPointX,pointX,setPointY,pointY,addPoint,points}) => <>
    {
      points.map((p,i) => (
        <div key={i}>({p.x}, {p.y})</div>
      ))
    }
    <label>X: </label>
    <input type="number" value={pointX} onChange={(x) => x.target.value ? setPointX(parseInt(x.target.value)) : 0} />
    <label>Y: </label>
    <input type="number" value={pointY} onChange={(y) => y.target.value ? setPointY(parseInt(y.target.value)) : 0} />
    <br />
    <button onClick={addPoint}>Add</button>
  </>
}

export default FormControls;