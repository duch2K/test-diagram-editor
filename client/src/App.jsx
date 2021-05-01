import { useState, useEffect } from 'react';
import { Stage, Layer, Rect, Circle } from 'react-konva';

import { 
  getCircles, getRects, 
  addCircle, addRect,
  updateCircle, updateRect
} from './http/shapeApi';
import { maxWidth, maxHeight, colors } from './consts';
import './css/style.css';

const random = (min, max) => {
  return Math.random() * (max - min) + min;
}

function App() {
  const [circles, setCircles] = useState([]);
  const [rects, setRects] = useState([]);

  const initShapes = () => {
    getCircles().then((data) => {
      setCircles(data);
    })
    .catch((err) => {
      console.log(err);
    })

    getRects().then((data) => {
      setRects(data);
    })
    .catch((err) => {
      console.log(err);
    })
  };

  const createShape = (type) => {
    if (type === 'circle') {
      const circle = {
        radius: random(35, 45),
        color: colors[Math.floor(random(0, colors.length - 1))],
        x: maxWidth / 2,
        y: maxHeight / 2
      };

      addCircle(circle).then((data) => {
        console.log(data)
        setCircles((prev) => ([
          ...prev,
          data
        ]));
      })
      .catch((err) => {
        console.log(err);
      });

    } else {
      const rect = {
        width: random(70, 90),
        height: random(70, 90),
        color: colors[Math.floor(random(0, colors.length - 1))],
        x: maxWidth / 2,
        y: maxHeight / 2
      };
      
      addRect(rect).then((data) => {
        setRects((prev) => ([
          ...prev,
          data
        ]));
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  const updateShape = (type, { id, x, y }) => {
    if (type === 'circle') {
      updateCircle(id, { x, y });

    } else {
      updateRect(id, { x, y });
    }
  };

  useEffect(() => {
    initShapes();

  }, []);

  const handleAddShape = (e) => {
    if (e.target.classList.contains('circle')) {
      createShape('circle');
    } else {
      createShape('rect');
    }
  };

  const handleMouseDown = (e) => {
    e.target.setStrokeWidth(3);
  };

  const handleMouseUp = (e) => {
    e.target.setStrokeWidth(1);
  };

  const handleDragEnd = (e, type, id) => {
    handleMouseUp(e);
    const x = e.target.x();
    const y = e.target.y();

    updateShape(type, { id, x, y });
  };

  return (
    <div className="app">
      <div className="wrapper">
        <div className="sidebar">
          <ul>
            <li>
              <div className="shape circle" onClick={handleAddShape}></div>
            </li>
            <li>
              <div className="shape" onClick={handleAddShape}></div>
            </li>
          </ul>
        </div>
        <div className="editor">
          <Stage width={maxWidth} height={maxHeight}>
            <Layer>
              {circles && circles.map(({ id, radius, color, x, y }) => (
                <Circle key={'circle' + id} id={id}
                  radius={radius}
                  x={x} y={y}
                  fill={color ? color : ''}
                  stroke="black"
                  strokeWidth={1}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  draggable
                  onDragEnd={(e) => handleDragEnd(e, 'circle', id)}
                />
              ))}

              {rects && rects.map(({ id, width, height, color, x, y }) => (
                <Rect key={'rect' + id} id={id}
                  width={width}
                  height={height}
                  x={x} y={y}
                  fill={color ? color : ''}
                  stroke="black"
                  strokeWidth={1}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  draggable
                  onDragEnd={(e) => handleDragEnd(e, 'rect', id)}
                />
              ))}
            </Layer>
          </Stage>
        </div>
      </div>       
    </div>
  );
}

export default App;
