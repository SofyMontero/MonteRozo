"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import companies from "../../public/companies.json";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalculatorIcon,
  Clock,
  DollarSign,
  Percent,
  ArrowLeft,
  ArrowRight,
  UserCheck,
  CheckCircle,
} from "lucide-react";
import { Modal } from "react-bootstrap";
import { Button } from "@/ui/button";
import { Label } from "@/ui/label";
import { Input } from "@/ui/input";

export function Calculator() {
  const [valorFactura, setValorFactura] = useState<number>(0);
  const [valorFacturaFormatted, setValorFacturaFormatted] =
    useState<string>("");
  const [plazoPago, setPlazoPago] = useState<number>(30);
  const [pagador, setPagador] = useState<string>("");
  const [valorAnticipo, setValorAnticipo] = useState<number>(0);
  const [descuentoEstimado, setDescuentoEstimado] = useState<number>(0);
  const [tasaMensual, setTasaMensual] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const calculatorRef = useRef<HTMLDivElement>(null);

  const scrollToTopOfCalculator = () => {
    if (calculatorRef.current) {
      calculatorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleFlip = () => {
    setIsFlipped(true);
    setTimeout(() => {
      calculatorRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  };
  const handleUnflip = () => {
    setIsFlipped(false);
  };
  const handleSubmitFinanciamiento = () => {
    setShowModal(true);
  };

  const PORCENTAJE_FINANCIAMIENTO = plazoPago == 120 ? 85 : 90;
  const tasasEcopetrol: { [plazo: number]: number } = {
    30: 0.3402,
    60: 0.2697,
    90: 0.249,
    120: 0.2387,
  };

  const TASA_ANUAL =
    pagador === "ecopetrol" ? tasasEcopetrol[plazoPago] ?? 0.2387 : 0.2387;

  useEffect(() => {
    if (valorFactura > 0) {
      calcularValores();
    }
  }, [valorFactura, plazoPago, pagador]);

  const calcularValores = () => {
    const tasaPeriodo = TASA_ANUAL * (plazoPago / 360);
    const descuento = valorFactura * tasaPeriodo;
    setDescuentoEstimado(descuento);
    const anticipo = valorFactura * (PORCENTAJE_FINANCIAMIENTO / 100);
    setValorAnticipo(anticipo - descuento);
    const tasaMensualEquivalente = Math.pow(1 + TASA_ANUAL, 30 / 360) - 1;
    setTasaMensual(tasaMensualEquivalente);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    const numValue = numericValue ? Number.parseInt(numericValue, 10) : 0;
    setValorFactura(numValue);
    if (numericValue) {
      return new Intl.NumberFormat("es-CO", {
        style: "decimal",
        maximumFractionDigits: 0,
      }).format(numValue);
    }
    return "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNumber(e.target.value);
    setValorFacturaFormatted(formatted);
  };

  const handleCalculate = () => {
    if (valorFactura > 0 && pagador && validateEmail(email)) {
      setShowResults(true);
      enviarCorreo(); // Aquí se hace el envío con fetch
    } else {
      console.warn("Faltan datos para enviar el correo.");
    }
  };

  const nextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    } else {
      handleCalculate();
    }
  };

  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const isButtonDisabled = () => {
    if (activeStep === 1) return valorFacturaFormatted === "";
    if (activeStep === 2) return pagador === "";
    if (activeStep === 3) return email === "" || !validateEmail(email);
    return false;
  };

  const enviarCorreo = async () => {
    const response = await fetch(
      "https://hwwqudd0fa.execute-api.us-east-1.amazonaws.com/Prod/sistema/envieCorreoLanding",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tenantId: "265a0493-740a-11ee-a243-12a5defed043",
          valorFactura: valorFactura,
          pagador: pagador,
          correo: email,
        }),
      }
    );
    const data = await response.json();

    if (response.ok) {
      console.log("Correo enviado con éxito:", data.message);
    } else {
      console.error("Error al enviar el correo:", data.message);
    }
  };

  const renderStepper = () => {
    return (
      <div className="d-flex justify-content-between mb-4 px-2">
        {[1, 2, 3].map((step) => (
          <>
            <div key={step} className="d-flex flex-column align-items-center">
              <div
                className={`rounded-circle d-flex align-items-center justify-content-center fw-medium text-white ${
                  activeStep === step
                    ? "bg-lime-500"
                    : activeStep > step
                    ? "bg-light text-lime-500"
                    : "bg-secondary text-light"
                }`}
                style={{ width: "2rem", height: "2rem", fontSize: "0.875rem" }}
              >
                {step}
              </div>
              <div
                className={`mt-1 small ${
                  activeStep === step
                    ? "text-lime-500 fw-bold"
                    : activeStep > step
                    ? "text-secondary"
                    : "text-muted"
                }`}
              >
                {step === 1
                  ? "Monto y plazo"
                  : step === 2
                  ? "Clientes"
                  : "Cotización"}
              </div>
            </div>
            <div className="bs-stepper-line"></div>
          </>
        ))}
      </div>
    );
  };

  return (
    <div className="container" ref={calculatorRef}>
      <div
        className={`relative transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front side - Calculator */}
        <div className={`backface-hidden ${isFlipped ? "d-none" : "visible"}`}>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="d-flex align-items-center gap-2">
              <div
                className="d-flex align-items-center justify-content-center bg-lime-500 text-white rounded"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <CalculatorIcon size={20} />
              </div>
              <h2 className="h5 text-dark mb-0">Calculadora de liquidez</h2>
            </div>
            <button
              type="button"
              className={`btn btn-sm btn-link bg-lime-500 text-white fw-medium text-decoration-none ${
                !showResults ? "d-none" : "visible"
              }`}
              onClick={() => setShowResults(false)}
              aria-label="Editar"
            >
              Editar
            </button>
          </div>

          {!showResults ? (
            <div>
              {renderStepper()}

              <AnimatePresence mode="wait">
                {activeStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4">
                      <Label
                        htmlFor="valorFactura"
                        className="form-label text-dark fw-medium"
                      >
                        ¿Cuánta liquidez estás buscando?
                      </Label>
                      <div className="position-relative mt-2">
                        <i className="bi bi-currency-dollar position-absolute top-50 start-0 translate-middle-y text-lime-500 ps-3"></i>
                        <Input
                          id="valorFactura"
                          type="text"
                          placeholder="Ingresa el monto total"
                          value={valorFacturaFormatted}
                          onChange={handleInputChange}
                          className="form-control form-control-lg ps-5"
                          aria-label="Valor de la factura"
                        />
                      </div>
                    </div>
                    <div className="mb-4 ">
                      <label className="form-label text-dark fw-medium mb-3">
                        ¿Cuál es el plazo promedio de pago de tus facturas?
                      </label>
                      <div className="row g-3">
                        {[30, 60, 90, 120].map((dias) => (
                          <div className="col-3" key={dias}>
                            <button
                              type="button"
                              className={`btn w-100 py-2 ${
                                plazoPago === dias
                                  ? "btn-success bg-gradient-lime-500 text-white"
                                  : "btn-outline-secondary"
                              }`}
                              onClick={() => setPlazoPago(dias)}
                              aria-label={`${dias} días`}
                            >
                              <div className="d-flex flex-column align-items-center">
                                <span className="fs-4 fw-bold">
                                  {dias === 120 ? `≥${dias}` : dias}
                                </span>
                                <span className="fs-6">Días</span>
                              </div>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4">
                      <label
                        htmlFor="pagador"
                        className="form-label text-dark fw-medium fs-5 mb-2"
                      >
                        ¿Quiénes son tus principales clientes?
                      </label>
                      <select
                        id="pagador"
                        className="form-select form-select-lg"
                        value={pagador}
                        onChange={(e) => setPagador(e.target.value)}
                        aria-label="Pagador de la factura"
                      >
                        <option value="">Selecciona un cliente</option>
                        {companies.map((company) => (
                          <option key={company.nit} value={company.empresa}>
                            {company.empresa}
                          </option>
                        ))}
                      </select>

                      <div className="mt-4">
                        <label className="form-label text-dark fw-medium">
                          Clientes populares:
                        </label>
                        <div className="d-flex flex-wrap gap-2 mt-2">
                          {[
                            { nit: "899999068", empresa: "ECOPETROL SA" },
                            { nit: "900276962", empresa: "D1 SAS" },
                            { nit: "890300466", empresa: "TECNOQUIMICAS SA" },
                            { nit: "830003564", empresa: "COLSUBSIDIO EPS" },
                          ].map((company) => (
                            <button
                              key={company.nit}
                              type="button"
                              className={`btn btn-outline-secondary ${
                                pagador === company.empresa
                                  ? "active bg-light border-success text-lime-500"
                                  : ""
                              }`}
                              onClick={() => setPagador(company.empresa)}
                              aria-label={company.empresa}
                            >
                              {company.empresa}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 3 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="form-label text-dark fw-medium fs-5 mb-2"
                      >
                        ¿A qué correo enviamos tu cotización?
                      </label>
                      <div className="position-relative mt-2">
                        <i className="bi bi-envelope-fill position-absolute top-50 start-0 translate-middle-y text-lime-500 ps-3"></i>
                        <input
                          id="email"
                          type="email"
                          className="form-control form-control-lg ps-5"
                          placeholder="Tu correo corporativo"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError("");
                          }}
                          aria-label="Correo electrónico"
                        />
                      </div>
                      {emailError && (
                        <p className="mt-2 text-danger small">{emailError}</p>
                      )}
                      <p className="mt-3 text-muted small">
                        Tus datos están seguros. No compartiremos tu información
                        con terceros.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="d-flex justify-content-between mt-4">
                {activeStep > 1 ? (
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    className="btn btn-success bg-background text-gray-700 d-flex align-items-center gap-2"
                    aria-label="Anterior"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Anterior
                  </Button>
                ) : (
                  <div></div>
                )}
                <Button
                  onClick={nextStep}
                  variant={"outline"}
                  className="btn btn-success bg-lime-500 d-flex align-items-center "
                  aria-label={activeStep === 3 ? "Calcular" : "Siguiente"}
                  disabled={isButtonDisabled()}
                >
                  {activeStep === 3 ? "Ver cotización" : "Siguiente"}
                  {activeStep !== 3 && <ArrowRight className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="p-4 border border-light border-top-0 rounded-bottom">
                <div className="bg-lime-50 rounded-xl p-3 gap-3 border border-lime-1003 mb-3">
                  <div className="text-lime-500 fw-medium mb-1">
                    En 24 horas recibes:
                  </div>
                  <div className="h2 fw-bold text-lime-500 mb-0">
                    {formatCurrency(valorAnticipo)}
                  </div>
                  <div className="text-lime-500 fw-medium small mb-1">
                    Te anticipamos el {PORCENTAJE_FINANCIAMIENTO}% de tu factura
                    de ${valorFacturaFormatted}.
                  </div>
                </div>

                <div className="bg-light rounded p-3 border border-light d-flex align-items-center gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-lime-500 text-white rounded shadow-sm"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <Percent className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="small text-muted fw-medium mb-1">
                      Tasa de descuento estimada *
                    </div>
                    <div className="fw-bold text-dark">
                      {(tasaMensual * 100).toFixed(2)}% mensual
                    </div>
                  </div>
                </div>

                <div className="bg-light rounded p-3 border border-light d-flex align-items-center gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-success text-white rounded shadow-sm"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="small text-muted mb-1 fw-medium">
                      Descuento estimado ({plazoPago} días)
                    </div>
                    <div className="h5 fw-bold text-dark">
                      {formatCurrency(descuentoEstimado)}
                    </div>
                  </div>
                </div>

                <div className="bg-light rounded p-3 border border-light d-flex align-items-center gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-lime-500 text-white rounded shadow-sm"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="small text-muted fw-medium mb-1">
                      Tiempo de desembolso
                    </div>
                    <div className="fw-bold text-dark">24 horas</div>
                  </div>
                </div>

                <button
                  className="btn btn-success bg-lime-500 fw-medium w-100 shadow mb-4"
                  style={{ fontSize: "17px" }}
                  onClick={() => {
                    scrollToTopOfCalculator(); // Paso 1: Scroll
                    setTimeout(() => {
                      handleFlip(); // Paso 2: Flip
                    }, 400); // Ajusta el delay si el scroll dura más
                  }}
                  aria-label="Solicitar financiamiento"
                >
                  Crear tu cuenta
                </button>
                <div className="text-muted small bg-success bg-opacity-10 p-3 rounded border border-success border-opacity-25">
                  Cuando recibamos el pago de tu factura, descontamos los
                  intereses de los días exactos y te devolvemos{" "}
                  <strong>el remanente</strong>.
                  <p className="pt-2 mb-0">*La tasa puede variar.</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Back side - Form */}
        <div
          className={`absolute inset-0 backface-hidden rotate-y-180 ${
            isFlipped ? "" : "d-none"
          }`}
        >
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="d-flex align-items-center gap-2">
              <div
                className="d-flex align-items-center justify-content-center bg-lime-500 text-white rounded"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <UserCheck size={20} />
              </div>
              <h2 className="h5 text-dark mb-0">Crea tu cuenta en minutos</h2>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-link bg-lime-500 text-white fw-medium text-decoration-none"
              onClick={handleUnflip}
              aria-label="Volver a la calculadora"
            >
              Volver
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="p-4 border border-light border-top-0 rounded-bottom">
              <div className="mb-4">
                <label
                  htmlFor="nit"
                  className="form-label text-dark fw-medium fs-6 mb-1"
                >
                  Ingresa el NIT y dígito de verificación
                </label>
                <div className="row mt-2">
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      id="nit"
                      name="nit"
                      placeholder="NIT"
                      required
                    />
                  </div>
                  <div className="col-md-1 text-center"> - </div>
                  <div className="col-md-3">
                    <input
                      type="text"
                      className="form-control"
                      id="digitoVerificacion"
                      name="digitoVerificacion"
                      placeholder="DV"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="form-label text-dark fw-medium fs-6 mb-1"
                >
                  Ingresa la razón social
                </label>
                <div className="position-relative mt-2">
                  <input
                    type="text"
                    className="form-control"
                    id="razonSocial"
                    name="razonSocial"
                    placeholder="Razón social"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="form-label text-dark fw-medium fs-6 mb-1"
                >
                  Confirma tu correo corporativo
                </label>
                <div className="position-relative mt-2">
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    id="correoCorporativo"
                    name="correoCorporativo"
                    required
                  />
                </div>
              </div>
              <button
                className="btn btn-success bg-lime-500 fw-medium w-100 shadow mt-2"
                style={{ fontSize: "17px" }}
                onClick={handleSubmitFinanciamiento}
                aria-label="Solicitar financiamiento"
              >
                Crear mi cuenta
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de confirmación */}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">
            Solicitud Recibida
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex flex-column align-items-center py-4">
            <div
              className="d-flex align-items-center justify-content-center bg-lime-50 bg-opacity-25 rounded-circle mb-3"
              style={{ width: "64px", height: "64px" }}
            >
              <CheckCircle
                className="text-lime-500"
                style={{ width: "32px", height: "32px" }}
              />
            </div>
            <p className="text-center text-muted mb-0">
              Alguien del equipo comercial se estará contactando contigo
              próximamente.
            </p>
          </div>
        </Modal.Body>

        <Modal.Footer className="justify-content-center">
          <button
            className="btn bg-lime-500 w-100 text-white shadow"
            style={{ height: "48px" }}
            onClick={() => {
              window.location.href =
                "https://cfinancia-prod-clientes.cesionbnk.com";
            }}
          >
            Continuar con el proceso de onboarding
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
