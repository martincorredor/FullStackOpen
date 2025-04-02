const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map((part) => (
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part}: {props.exercises}
    </p>
  );
};

const Total = (props) => {
  const exercises1 = props.course.parts[0].exercises;
  const exercises2 = props.course.parts[1].exercises;
  const exercises3 = props.course.parts[2].exercises;

  return <p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
