import React, { useReducer } from "react";

const reducer = (state, akcija) => {
  switch (akcija.type) {
    case "promjena_inputa":
      return { ...state, ime: akcija.payload };

    case "unesi":
      if (akcija.payload === "") {
        alert("Ne može prazno...nešto napiši...hvala");
        return { ...state };
      }
      const novaOsoba = {
        id: new Date().getTime().toString(),
        ime: akcija.payload,
      };

      return {
        ...state,
        ime: "",
        osobe: [...state.osobe, novaOsoba],
        textModal: `Uspješno ste unijeli ime: "${akcija.payload}"`,
        showModal: true,
      };

    case "isModal__Open":
      return { ...state, showModal: false };

    case "obrisi":
      const noveOsobe = state.osobe.filter(
        (osoba) => osoba.id !== akcija.payload[0]
      );
      return {
        ...state,
        osobe: noveOsobe,
        textModal: `Uspješno ste obrisali ime: "${akcija.payload[1]}"`,
        showModal: true,
      };

    case "isModal__Close":
      return { ...state, showModal: false };

    default:
      throw new Error("Nema takve radnje");
  }
};

const initialState = {
  ime: "",
  osobe: [],
  showModal: false,
  textModal: "",
};

const ReducerGlupi = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const unesi_OnClickHandler = () => {
    dispatch({ type: "unesi", payload: state.ime });

    setTimeout(() => {
      return dispatch({ type: "isModal__Open", payload: state.showModal });
    }, 2000);
  };

  return (
    <div className="container" style={{ backgroundColor: "teal" }}>
      <div className="col-md-6" style={{ margin: "auto" }}>
        {state.showModal ? (
          <div
            name="modal"
            style={{
              width: "100%",
              height: "40px",
              backgroundColor: "orange",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            {state.textModal}
          </div>
        ) : (
          <div
            name="modal"
            style={{ width: "100%", height: "40px", visibility: "hidden" }}
          >
            {state.textModal}
          </div>
        )}

        <div name="unos" style={{ width: "100%" }}>
          <input
            type="text"
            name="novaOsoba"
            placeholder="Unesite ime nove osobe:"
            value={state.ime}
            onChange={(e) =>
              dispatch({ type: "promjena_inputa", payload: e.target.value })
            }
          />
          <button
            type="button"
            name="posalji"
            onClick={unesi_OnClickHandler}
            style={{
              marginLeft: "5px",
              borderRadius: "5px",
              backgroundColor: "orange",
            }}
            // dispatch({ type: "modal_unos", payload: state.ime });
          >
            Unesi
          </button>
        </div>
        <div name="lista" style={{ width: "100%" }}>
          <h4>Unesene osobe:</h4>

          {state.osobe.map((osoba, index) => {
            const obrisi_OnClickHandler = () => {
              dispatch({ type: "obrisi", payload: [osoba.id, osoba.ime] });

              setTimeout(() => {
                return dispatch({
                  type: "isModal__Close",
                  payload: state.showModal,
                });
              }, 2000);
            };

            return (
              <div
                key={osoba.id}
                className="row"
                style={{ justifyContent: "space-between" }}
              >
                <h6>{osoba.ime}</h6>
                <i class="fas fa-trash" onClick={obrisi_OnClickHandler}></i>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReducerGlupi;
