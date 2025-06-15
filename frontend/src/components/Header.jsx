import { animals } from "../features/AnimalsSlice";
import { useSelector, useDispatch } from "react-redux";
import { choose } from "../features/AnimalsSlice";

export default function Header() {
  const animal = useSelector((state) => state.animal);
  const dispatch = useDispatch();

  return (
    <>
      <section className="flex justify-center gap-2 mb-3">
        {animals.map((value) => (
          <button
            key={value.id}
            className={`btn ${
              animal.id != value.id ? "btn-neutral" : "btn-primary"
            }`}
            onClick={() => {
              dispatch(choose(value.id));
            }}
          >
            <span>{value.name}</span>
          </button>
        ))}
      </section>
    </>
  );
}
