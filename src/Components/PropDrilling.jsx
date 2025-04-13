export const ParentComponent = () => {
  return (
    <div className="text-center p-3 m-3 text-orange-600  text-3xl w-fit">
      <h1 >
        Parent Component
      </h1>
      <ChildComponent name=" GameOver HellBoy" />
    </div>
  );
};

const ChildComponent = ({ name }) => {
  const obj = {
    username: "Goli",
    age: 32,
  };
  return (
    < div>
      <h1>
        Child Component {name}
      </h1>

      <GrandChildComponent name={name} obj={obj} />
    </div>
  );
};
const GrandChildComponent = ({name, obj }) => {
  return (
    <div >
      <h1 >
        GrandChild Component {name}
      </h1>

      <p >{obj.username}</p>

      <GrandGrandChildComponent name={name} obj={obj} />
    </div>
  );
};
const GrandGrandChildComponent = ({name , obj}) => {
  return (
    <div className="text-center p-3 m-3 text-orange-600  text-3xl w-fit">
      <h1 >
        GrandGrandChild Component {name}
      </h1>
      <p>Age of Goli is {obj.age}</p>
    </div>
  );
};
