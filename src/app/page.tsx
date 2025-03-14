"use client";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { TextAnimate } from "@/components/magicui/text-animate";
import PageSection from "@/components/PageSection";
import ScrollDownIndicator from "@/components/ScrollDownIndicator";
import TextReveal from "@/components/TextReveal";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [diasJuntos, setDiasJuntos] = useState(0);
  const [horasJuntos, setHorasJuntos] = useState(0);

  useEffect(() => {
    //pega os dias juntos desde 15 de março de 2023
    const dataInicio = new Date("2023-03-15");
    const dataAtual = new Date();
    const diferenca = dataAtual.getTime() - dataInicio.getTime();
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    setDiasJuntos(dias);

    //pega as horas juntos desde 15 de março de 2023
    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    setHorasJuntos(horas);
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory px-12 ">
      <PageSection>
        <TextAnimate
          animation="blurInUp"
          by="character"
          once
          className="text-5xl font-[Pacifico] "
        >
          Oi, meu amor!
        </TextAnimate>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-5xl font-[Montserrat]">
            Hoje eu preparei algo especial para{" "}
            <b className="text-[#f41870] ">você</b>...
          </h2>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl font-[Montserrat]">Fazem exatamente</h2>

            <NumberTicker
              value={diasJuntos}
              className="whitespace-pre-wrap text-8xl font-bold tracking-tighter text-[#f41870] dark:text-white"
            />

            <h2 className="text-5xl font-[Montserrat]">
              dias que estamos juntos!
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3 justify-start">
            <h2 className="text-5xl font-[Montserrat]">Isso corresponde à</h2>

            <NumberTicker
              value={horasJuntos}
              className="whitespace-pre-wrap text-8xl font-bold tracking-tighter text-[#f41870]"
            />

            <h2 className="text-5xl font-[Montserrat]">horas!</h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-5xl font-[Montserrat]">
            E durante esse tempo, <b className="text-[#f41870] ">construímos</b>{" "}
            uma linda história juntos
          </h2>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-5xl font-[Montserrat]">
            Da qual eu me orgulho muito!
          </h2>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-[Montserrat]">
              Mesmo com um começo bem diferenciado...
            </h2>

            <Image
              src="/images/primeira-foto.jpg"
              width={500}
              height={500}
              alt="Primeira foto juntos"
              className="rounded-lg"
            />

            <h2 className="text-md font-[Montserrat] text-center">
              Primeiro encontro, 06 de fevereiro de 2022
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-[Montserrat]">
              Fomos nos conhecendo melhor...
            </h2>

            <Image
              src="/images/segunda-foto.jpeg"
              width={500}
              height={500}
              alt="Segunda foto juntos"
              className="rounded-lg max-h-[600px] object-cover"
            />

            <h2 className="text-md font-[Montserrat] text-center">
              Encontro no Jump, 28 de janeiro de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-[Montserrat]">
              E eu me apaixonava cada vez mais
            </h2>

            <Image
              src="/images/terceira-foto.jpeg"
              width={500}
              height={500}
              alt="Terceira foto juntos"
              className="rounded-lg max-h-[600px] object-cover"
            />

            <h2 className="text-md font-[Montserrat] text-center">
              Aniversário da Clara Alves, 24 de fevereiro de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-[Montserrat]">
              Eram tantas ligações até altas horas...
            </h2>

            <Image
              src="/images/ligacoes.png"
              width={500}
              height={500}
              alt="ligacoes"
              className="rounded-lg max-h-[600px] object-cover"
            />

            <h2 className="text-md font-[Montserrat] text-center">
              Print durante chamada, 27 de fevereiro de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      {/* <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-[Montserrat]">Altas horas mesmo 😂</h2>

            <Image
              src="/images/ligacoes2.png"
              width={500}
              height={500}
              alt="ligacoes"
              className="rounded-lg max-h-[500px] object-cover"
            />

            <h2 className="text-md font-[Montserrat] text-center">
              Print durante chamada, 1 de março de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection> */}
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-[Montserrat]">
              Tivemos nosso primeiro filho virtual
            </h2>

            <Image
              src="/images/filho1.png"
              width={500}
              height={500}
              alt="filho1"
              className="rounded-lg max-h-[600px] object-cover"
            />

            <h2 className="text-md font-[Montserrat] text-center">
              Foto do filho, 1 de março de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-[Montserrat]">
              E eu dei a primeira cheirada no seu cangote
            </h2>

            <Image
              src="/images/primeira-cheirada.jpeg"
              width={500}
              height={500}
              alt="filho1"
              className="rounded-lg"
            />

            <h2 className="text-md font-[Montserrat] text-center">
              Primeira cheirada no cangote, 2 de março de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-[Montserrat]">
              Você me levou para conhecer sua família
            </h2>

            <Image
              src="/images/manuella.jpeg"
              width={500}
              height={500}
              alt="filho1"
              className="rounded-lg"
            />

            <h2 className="text-md font-[Montserrat] text-center">
              Primeira vez conhecendo a Manu, 11 de março de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-[Montserrat]">
              E eu finalmente te pedi em namoro
            </h2>

            <Image
              src="/images/15marco.jpeg"
              width={500}
              height={500}
              alt="filho1"
              className="rounded-lg max-h-[600px] object-cover"
            />

            <h2 className="text-md font-[Montserrat] text-center">
              Pedido de namoro, 15 de março de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-2xl font-[Montserrat]">E sinceramente?</h2>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-2xl font-[Montserrat] text-center">
            Foi a <b className="text-[#f41870] ">melhor</b> coisa que já
            aconteceu
          </h2>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-3xl font-[Montserrat] text-center">em</h2>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-4xl font-[Montserrat] text-center">toda</h2>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-5xl font-[Montserrat] text-center">minha</h2>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-6xl font-[Montserrat] text-center font-bold text-[#f41870]">
            VIDA
          </h2>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-2xl font-[Montserrat] text-center">
            E eu não poderia estar mais <b className="text-[#f41870] ">feliz</b>{" "}
            por ter você ao meu lado durante todo esse tempo
          </h2>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-2 align-center">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <div>
              <Image
                src="/images/foto-horizontal1.jpeg"
                alt="filho1"
                width={500}
                height={500}
                className="rounded-lg aspect-auto"
              />
              <h2 className="text-sm font-[Montserrat] text-center mt-1">
                1° Mês de namoro, 15 de abril de 2023
              </h2>
            </div>
            <div>
              <Image
                src="/images/foto-horizontal2.jpeg"
                alt="filho1"
                width={500}
                height={500}
                className="rounded-lg aspect-auto"
              />
              <h2 className="text-sm font-[Montserrat] text-center mt-1">
                1° Mês de namoro, 15 de abril de 2023
              </h2>
            </div>
            <div>
              <Image
                src="/images/foto-horizontal3.jpeg"
                alt="filho1"
                width={500}
                height={500}
                className="rounded-lg aspect-auto"
              />
              <h2 className="text-sm font-[Montserrat] text-center mt-1">
                1° Mês de namoro, 2 de março de 2023
              </h2>
            </div>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/fotoburger.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Comendo lanche no carro, 26 de abril de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/maosdadas.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Passeio de mãos dadas, 06 de maio de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/anivermanu.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Aniversário da Manuzinha, 13 de maio de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/fotoespelhoquarto.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Foto no espelho do seu quarto, 26 de maio de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/emcasacomamora.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Em casa com a Amora, 2 de junho de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/dormindo.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Capotado no meu amor, 11 de junho de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/fotocamisetanamorados.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Camiseta de dia dos namorados, 15 de junho de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/festajunina.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Festa Junina Forte Castelo, 24 de junho de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/festadoida.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Festa muito doida, 15 de julho de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/primeiroshow.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Primeiro show juntos, 23 de julho de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/nossoamorpelojump.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Nosso amor pelo Jump ❤️, 18 de agosto de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/pesjuntos.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Pés juntinhos, 1 de setembro de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/fotomaoamor.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Eu te amo na mão, 3 de setembro de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/anivertati.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Aniversário da Tati, 6 de setembro de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/maisumshow.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Show da 30, 14 de outubro de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/aniversariosurpresa.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Aniversário surpresa (melhor presente de todos), 21 de outubro de
              2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/halloween.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Festa Halloween muito doida, 28 de outubro de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/maisumshow2.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              MAIS UM SHOW, 1 de novembro de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/fotocompedrinho.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Foto com Pedrinho, 10 de dezembro de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/formatura.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Formatura da Gata, 15 de dezembro de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/anonovo.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Primeiro Ano-Novo juntos, 31 de dezembro de 2023
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/festadauva.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Festa da Uva Jundiaí, 13 de janeiro de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/luanbrincar.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Luan brincando, 4 de fevereiro de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/aniversariomaria.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Entregando presente meia noite, 11 de fevereiro de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/jantarnopezao.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Jantar no Pézão, 16 de fevereiro de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/umanodenamoro.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              UM ANO DE NAMORO ❤️, 15 de março de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/comemorandoumano.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Comemorando um ano de namoro, 23 de março de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/unimed.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Cuidando do meu amor na Unimed, 2 de abril de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/anivermanu2.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Aniversário Manuella, 18 de maio de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/diadosnamorados.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Dia dos namorados, 12 de junho de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/diadosnamoradosverdadeiro.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Dia dos namorados OFICIAL, 12 de junho de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/jeronimocomluan.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Jeronimo com o Lu, 15 de junho de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/aniversarioeriko.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Aniversário do sogrão, 22 de junho de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/passeioshoppingcomcirco.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Passeio no shopping, 20 de julho de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/luangamer.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Luan GAMER, 10 de agosto de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/primeiravezacademia.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Primeira vez na academia juntos, 13 de setembro de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/jumpdenovo.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Mais um JUMP, 12 de outubro de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/jeronimo.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Será que amamos um burguer?, 18 de outubro de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/casamentonatalia.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Casamento Natália, 19 de outubro de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/tirouodente.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Tirou o siso, 29 de novembro de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/pezinhos.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              PÉZINHOS, 30 de novembro de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/primeironatal.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Primeiro Natal juntos 🎅, 24 de dezembro de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/primeiraviagem.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Primeira viagem em família, 25 de dezembro de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/diversao.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Primeira viagem em família, 26 de dezembro de 2024
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/amigochaves.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Amigo Chaves, 2 de janeiro de 2025
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/aniversariomaria2.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Aniversário do Amor, 15 de fevereiro de 2025
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-[Montserrat] text-center mb-2">
              Momentos inesquecíveis
            </h2>

            <Image
              src="/images/juntos.jpeg"
              alt="filho1"
              width={500}
              height={500}
              className="rounded-lg aspect-auto"
            />
            <h2 className="text-md font-[Montserrat] text-center mt-1">
              Muito amor no Jump, 22 de fevereiro de 2025
            </h2>
          </div>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-2xl font-[Montserrat] text-center">
            Eu te amo muito, muito, muito, muito, muito, muito, muito, muito
          </h2>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-2xl font-[Montserrat] text-center">
            E espero viver ainda mais momentos{" "}
            <b className="text-[#f41870] ">inesquecíveis</b> ao seu lado
          </h2>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-2xl font-[Montserrat] text-center">
            Obrigado por ser a <b className="text-[#f41870] ">melhor</b>{" "}
            namorada do mundo
          </h2>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-2xl font-[Montserrat] text-center">
            Obrigado por esses dois anos de muito amor ❤️
          </h2>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-2xl font-[Montserrat] text-center">
            Feliz dois anos de namoro 🥰
          </h2>
        </TextReveal>
      </PageSection>
      <PageSection>
        <TextReveal>
          <h2 className="text-5xl font-[Pacifico] text-center">Fim</h2>
        </TextReveal>
      </PageSection>
      <ScrollDownIndicator />{" "}
    </div>
  );
}
