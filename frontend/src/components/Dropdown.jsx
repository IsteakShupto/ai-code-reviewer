import { useSelector, useDispatch } from "react-redux";
import { choose, languages } from "../features/LanguageSlice";
import { useGetCodeReviewMutation } from "../features/api/agentApi";
import { setReview } from "../features/ReviewSlice";

export default function Dropdown() {
  const language = useSelector((state) => state.language);
  const animal = useSelector((state) => state.animal);
  const code = useSelector((state) => state.code);
  const dispatch = useDispatch();

  const [reviewCode] = useGetCodeReviewMutation({
    animalName: animal.name,
    code,
    codeLanguage: language.name,
  });

  const handleCodeGeneration = async () => {
    try {
      dispatch(setReview({ text: "", loading: true }));

      const result = await reviewCode({
        animalName: animal.name,
        code,
        codeLanguage: language.name,
      });

      if (result)
        dispatch(
          setReview({
            text: result.data.response,
            loading: false,
          })
        );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="dropdown dropdown-start mb-2">
        <div tabIndex="0" role="button" className="btn m-1">
          {language === null ? (
            <span>Choose a language</span>
          ) : (
            <span>{language.name}</span>
          )}
        </div>
        <ul
          tabIndex="0"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          {languages.map((value) => (
            <li key={value.id} onClick={() => dispatch(choose(value.id))}>
              <a>{value.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <button className="btn btn-primary" onClick={handleCodeGeneration}>
        Generate review
      </button>
    </>
  );
}
