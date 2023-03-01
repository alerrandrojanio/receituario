import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import { useReactToPrint } from "react-to-print"
import { PrinterIcon } from "@heroicons/react/24/solid"

import reactLogo from "../assets/logo-mirla.svg"

export function Index() {
  const [pacient, setPacient] = useState("")
  const [andress, setAndress] = useState("")
  const [prescription, setPrescription] = useState("")
  const [textarea, setTextarea] = useState("")
  const [date, setDate] = useState("")

  const componentRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Receituario ${pacient}`,
    onAfterPrint: () => alert("Print success!"),
  })

  return (
    <>
      <div>
        <button
          onClick={handlePrint}
          className="fixed z-90 bottom-10 right-8 bg-green-900 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:bg-green-800 hover:drop-shadow-2xl"
        >
          <PrinterIcon className="w-10 h-10" />
        </button>
      </div>
      <div ref={componentRef} className="h-screen max-w-[1200px] w-full m-auto">
        <div className="flex items-center justify-center gap-24">
          {/* Receituario 1 */}
          <div className="w-[650px] px-4">
            <div className="flex items-center justify-center">
              <img src={reactLogo} className="w-44 h-44" alt="logo mirla" />

              <div className="flex flex-col justify-center items-center gap-1 text-green-900">
                <h1 className="text-3xl font-bold">
                  Dra. Mirla Luiza Borges Costa
                </h1>
                <h3 className="text-xl font-semibold">Médica - Psiquiatra</h3>
                <span className="text-xl">Receituário Controle Especial</span>
              </div>
            </div>

            <div className="flex justify-center gap-8 text-md font-semibold text-green-900 -mt-4">
              <span>1ª Via - Retenção da Farmácia </span>
              <span>2ª Via - Orientação do Paciente</span>
            </div>

            <div className="flex justify-between gap-12 ">
              {/* CARD 1 */}
              <div className="w-72 rounded overflow-hidden border border-green-900 mt-4">
                <div className="py-1 bg-green-900 text-sm text-white font-semibold flex justify-center">
                  Idenficação do Emitente
                </div>
                <div className="px-2 py-2 text-xs flex flex-wrap gap-1 text-green-900 font-semibold">
                  <span>Nome completo: Mirla Luisa Borges Costa</span>
                  <span>CRM - 7068 RQE- 6475</span>
                  <span>
                    End. Completo e Telefone: Rua Ubaldino Souto Maior Nº 1264
                  </span>
                  <span>Bairro Fatima II - Fone: (88) 3691.1991</span>
                  <span>Email: mirlalborges@yahoo.com</span>
                  <span>Cidade: Crateús UF: CE</span>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="w-72 rounded overflow-hidden border border-green-900 mt-4">
                <div className="px-1 py-2 text-xs flex flex-col items-center text-green-900 font-semibold">
                  <div className="h-[130px]"></div>
                  <span>
                    ____________________________________________________
                  </span>
                  <span>Carimbo e assinatura do médico</span>
                </div>
              </div>
            </div>

            <div className="py-4 flex flex-col gap-3 font-semibold text-green-900">
              <label htmlFor="paciente" className="flex items-center gap-3">
                <span>Paciente: </span>
                <input
                  type="text"
                  className="w-full"
                  value={pacient}
                  onChange={(event) => setPacient(event.target.value)}
                />
              </label>
              <label htmlFor="endereco" className="flex items-center gap-3">
                <span>Endereço: </span>
                <input
                  type="text"
                  className="w-full"
                  value={andress}
                  onChange={(event) => setAndress(event.target.value)}
                />
              </label>
              <label htmlFor="prescricao" className="flex items-center gap-3">
                <span>Prescrição: </span>
                <input
                  type="text"
                  className="w-full"
                  value={prescription}
                  onChange={(event) => setPrescription(event.target.value)}
                />
              </label>

              <textarea
                name=""
                id=""
                cols={20}
                rows={7}
                value={textarea}
                onChange={(event) => setTextarea(event.target.value)}
                resize-none
              ></textarea>
              <label htmlFor="prescricao" className="flex items-center gap-3">
                <span>Data: </span>
                <input
                  type="text"
                  className="w-full"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </label>
            </div>

            <div className="flex justify-between gap-12">
              {/* CARD 1 */}
              <div className="w-72 rounded overflow-hidden border border-green-900 mt-4">
                <div className="py-1 bg-green-900 text-sm text-white font-semibold flex justify-center">
                  Identificação do Comprador
                </div>
                <div className="px-1 py-2 text-xs flex flex-wrap justify-center gap-1 text-green-900 font-semibold">
                  <span>
                    Nome: ______________________________________________
                  </span>
                  <span>
                    ______________________________________________________
                  </span>
                  <span>
                    Ident.: ___________________ Órg. Emissor: ____________
                  </span>
                  <span>
                    End.: ________________________________________________
                  </span>
                  <span>
                    _____________________________________________________
                  </span>
                  <span>
                    Cidade: _____________________________ UF: ___________
                  </span>
                  <span>
                    Telefone: ___________________________________________
                  </span>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="w-72 rounded overflow-hidden border border-green-900 mt-4">
                <div className="px-1 py-2 text-xs flex flex-col items-center text-green-900 font-semibold">
                  <div className="h-[140px]"></div>
                  <div className="flex gap-2">
                    <div className="flex flex-col items-center ">
                      <span>________________________________</span>
                      <span>Assinatura do farmacêuco</span>
                    </div>
                    <div>Data: ___/___/_____</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Receituario 2 */}
          <div className="w-[650px] px-4">
            <div className="flex items-center justify-center">
              <img src={reactLogo} className="w-44 h-44" alt="logo mirla" />

              <div className="flex flex-col justify-center items-center gap-1 text-green-900">
                <h1 className="text-3xl font-bold">
                  Dra. Mirla Luiza Borges Costa
                </h1>
                <h3 className="text-xl font-semibold">Médica - Psiquiatra</h3>
                <span className="text-xl">Receituário Controle Especial</span>
              </div>
            </div>

            <div className="flex justify-center gap-8 text-md font-semibold text-green-900 -mt-4">
              <span>1ª Via - Retenção da Farmácia </span>
              <span>2ª Via - Orientação do Paciente</span>
            </div>

            <div className="flex justify-between gap-12 ">
              {/* CARD 1 */}
              <div className="w-72 rounded overflow-hidden border border-green-900 mt-4">
                <div className="py-1 bg-green-900 text-sm text-white font-semibold flex justify-center">
                  Idenficação do Emitente
                </div>
                <div className="px-2 py-2 text-xs flex flex-wrap gap-1 text-green-900 font-semibold">
                  <span>Nome completo: Mirla Luisa Borges Costa</span>
                  <span>CRM - 7068 RQE- 6475</span>
                  <span>
                    End. Completo e Telefone: Rua Ubaldino Souto Maior Nº 1264
                  </span>
                  <span>Bairro Fatima II - Fone: (88) 3691.1991</span>
                  <span>Email: mirlalborges@yahoo.com</span>
                  <span>Cidade: Crateús UF: CE</span>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="w-72 rounded overflow-hidden border border-green-900 mt-4">
                <div className="px-1 py-2 text-xs flex flex-col items-center text-green-900 font-semibold">
                  <div className="h-[130px]"></div>
                  <span>
                    ____________________________________________________
                  </span>
                  <span>Carimbo e assinatura do médico</span>
                </div>
              </div>
            </div>

            <div className="py-4 flex flex-col gap-3 font-semibold text-green-900">
              <label htmlFor="paciente" className="flex items-center gap-3">
                <span>Paciente: </span>
                <input
                  type="text"
                  className="w-full"
                  value={pacient}
                  onChange={(event) => setPacient(event.target.value)}
                />
              </label>
              <label htmlFor="endereco" className="flex items-center gap-3">
                <span>Endereço: </span>
                <input
                  type="text"
                  className="w-full"
                  value={andress}
                  onChange={(event) => setAndress(event.target.value)}
                />
              </label>
              <label htmlFor="prescricao" className="flex items-center gap-3">
                <span>Prescrição: </span>
                <input
                  type="text"
                  className="w-full"
                  value={prescription}
                  onChange={(event) => setPrescription(event.target.value)}
                />
              </label>

              <textarea
                name=""
                id=""
                cols={20}
                rows={7}
                value={textarea}
                onChange={(event) => setTextarea(event.target.value)}
                resize-none
              ></textarea>
              <label htmlFor="prescricao" className="flex items-center gap-3">
                <span>Data: </span>
                <input
                  type="text"
                  className="w-full"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </label>
            </div>

            <div className="flex justify-between gap-12">
              {/* CARD 1 */}
              <div className="w-72 rounded overflow-hidden border border-green-900 mt-4">
                <div className="py-1 bg-green-900 text-sm text-white font-semibold flex justify-center">
                  Identificação do Comprador
                </div>
                <div className="px-1 py-2 text-xs flex flex-wrap justify-center gap-1 text-green-900 font-semibold">
                  <span>
                    Nome: ______________________________________________
                  </span>
                  <span>
                    ______________________________________________________
                  </span>
                  <span>
                    Ident.: ___________________ Órg. Emissor: ____________
                  </span>
                  <span>
                    End.: ________________________________________________
                  </span>
                  <span>
                    _____________________________________________________
                  </span>
                  <span>
                    Cidade: _____________________________ UF: ___________
                  </span>
                  <span>
                    Telefone: ___________________________________________
                  </span>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="w-72 rounded overflow-hidden border border-green-900 mt-4">
                <div className="px-1 py-2 text-xs flex flex-col items-center text-green-900 font-semibold">
                  <div className="h-[140px]"></div>
                  <div className="flex gap-2">
                    <div className="flex flex-col items-center ">
                      <span>________________________________</span>
                      <span>Assinatura do farmacêuco</span>
                    </div>
                    <div>Data: ___/___/_____</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
