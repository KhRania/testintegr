import React from "react";

import { Img, Text, Button, Line } from "components";

const LesvenementsdeYooreedPage = () => {
  function handleNavigate9() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gradient  flex flex-col items-center justify-end pt-[66px] w-[100%]">
          <div className="flex flex-col gap-[101px] md:gap-[40px] sm:gap-[40px] items-center justify-start w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between max-w-[1280px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_yooreed1.png"
                className="sm:flex-1 h-[102px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                alt="yooreedOne"
              />
              <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    YOOREED
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    OPERATEURS
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    PARTENAIRES
                  </Text>
                  <Text
                    className="font-bold text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    EVENEMENTS
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    CONTACT
                  </Text>
                </div>
              </div>
              <Button className="cursor-pointer font-normal leading-[normal] min-w-[137px] md:mt-[0] sm:mt-[0] my-[25px] not-italic text-[18px] text-center text-white_A700 w-[auto]">
                CONNEXION
              </Button>
            </div>
            <div className="flex flex-col justify-start w-[100%]">
              <div className="font-poppins h-[647px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                <Img
                  src="images/img_5313769012.png"
                  className="h-[647px] m-[auto] object-cover w-[100%]"
                  alt="5313769012"
                />
                <div className="absolute bottom-[17%] flex flex-col gap-[53px] items-start justify-start right-[26%] w-[44%]">
                  <div className="flex flex-col gap-[55px] items-center justify-start w-[100%]">
                    <Text
                      className="font-orelegaone not-italic text-black_900 text-left w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      Le 05 FEVRIER 2023
                    </Text>
                    <Text
                      className="font-poppins leading-[30.00px] not-italic text-black_900 text-left w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[20%]">
                    <Button className="cursor-pointer font-semibold leading-[normal] min-w-[123px] text-[17px] text-center text-white_A700 w-[auto]">
                      S’INSCRIRE
                    </Button>
                  </div>
                </div>
              </div>
              <Text
                className="font-orelegaone md:ml-[0] sm:ml-[0] ml-[80px] mt-[81px] not-italic text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Les événements à venir{" "}
              </Text>
              <div className="flex md:flex-col sm:flex-col flex-row gap-[22px] items-center justify-start max-w-[1282px] mt-[71px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
                <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-start shadow-bs md:w-[100%] sm:w-[100%] w-[50%]">
                  <Img
                    src="images/img_1329.png"
                    className="h-[421px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
                    alt="1329"
                  />
                </div>
                <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-start shadow-bs md:w-[100%] sm:w-[100%] w-[50%]">
                  <Img
                    src="images/img_21.png"
                    className="h-[421px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
                    alt="TwentyOne"
                  />
                </div>
              </div>
              <div className="flex sm:flex-col flex-row font-orelegaone md:gap-[40px] sm:gap-[40px] items-center justify-between max-w-[1156px] mt-[28px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
                <Text
                  className="leading-[40.00px] not-italic text-black_900 text-left"
                  as="h2"
                  variant="h2"
                >
                  Lorem ipsum dolor sit
                  <br />
                  amet, consectetur..
                </Text>
                <Text
                  className="leading-[40.00px] not-italic text-black_900 text-left"
                  as="h2"
                  variant="h2"
                >
                  Lorem ipsum dolor sit
                  <br />
                  amet, consectetur..
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-poppins md:gap-[40px] sm:gap-[40px] gap-[69px] items-center justify-start max-w-[1225px] mt-[31px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
                <Text
                  className="sm:flex-1 font-normal leading-[24.00px] not-italic text-black_900 text-left sm:w-[100%] w-[48%]"
                  as="h6"
                  variant="h6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Ut enim ad{" "}
                </Text>
                <Text
                  className="sm:flex-1 font-normal leading-[24.00px] not-italic text-black_900 text-left sm:w-[100%] w-[48%]"
                  as="h6"
                  variant="h6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Ut enim ad{" "}
                </Text>
              </div>
              <div className="flex flex-row font-poppins sm:gap-[40px] items-center justify-between md:ml-[0] sm:ml-[0] ml-[82px] mt-[20px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[54%]">
                <div className="flex flex-col items-center justify-start w-[auto]">
                  <Button className="cursor-pointer font-semibold leading-[normal] min-w-[123px] text-[17px] text-center text-white_A700 w-[auto]">
                    S’INSCRIRE
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start w-[auto]">
                  <Button className="cursor-pointer font-semibold leading-[normal] min-w-[123px] text-[17px] text-center text-white_A700 w-[auto]">
                    S’INSCRIRE
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-center justify-start max-w-[1280px] mt-[59px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
                <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-start shadow-bs md:w-[100%] sm:w-[100%] w-[50%]">
                  <Img
                    src="images/img_3502478.png"
                    className="h-[421px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
                    alt="3502478"
                  />
                </div>
                <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-start pl-[2px] shadow-bs md:w-[100%] sm:w-[100%] w-[50%]">
                  <Img
                    src="images/img_41.png"
                    className="h-[421px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
                    alt="FortyOne"
                  />
                </div>
              </div>
              <div className="flex sm:flex-col flex-row font-orelegaone md:gap-[40px] sm:gap-[40px] items-center justify-between max-w-[1156px] mt-[37px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
                <Text
                  className="leading-[40.00px] not-italic text-black_900 text-left"
                  as="h2"
                  variant="h2"
                >
                  Lorem ipsum dolor sit
                  <br />
                  amet, consectetur..
                </Text>
                <Text
                  className="leading-[40.00px] not-italic text-black_900 text-left"
                  as="h2"
                  variant="h2"
                >
                  Lorem ipsum dolor sit
                  <br />
                  amet, consectetur..
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-poppins md:gap-[40px] sm:gap-[40px] gap-[69px] items-center justify-start max-w-[1225px] mt-[31px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
                <Text
                  className="sm:flex-1 font-normal leading-[24.00px] not-italic text-black_900 text-left sm:w-[100%] w-[48%]"
                  as="h6"
                  variant="h6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Ut enim ad{" "}
                </Text>
                <Text
                  className="sm:flex-1 font-normal leading-[24.00px] not-italic text-black_900 text-left sm:w-[100%] w-[48%]"
                  as="h6"
                  variant="h6"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Ut enim ad{" "}
                </Text>
              </div>
              <div className="flex flex-row font-poppins sm:gap-[40px] items-center justify-between md:ml-[0] sm:ml-[0] ml-[82px] mt-[20px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[54%]">
                <div className="flex flex-col items-center justify-start w-[auto]">
                  <Button className="cursor-pointer font-semibold leading-[normal] min-w-[123px] text-[17px] text-center text-white_A700 w-[auto]">
                    S’INSCRIRE
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start w-[auto]">
                  <Button className="cursor-pointer font-semibold leading-[normal] min-w-[123px] text-[17px] text-center text-white_A700 w-[auto]">
                    S’INSCRIRE
                  </Button>
                </div>
              </div>
              <footer className="bg-red_A200 flex font-poppins items-center justify-center mt-[57px] w-[100%]">
                <div className="flex flex-col items-center justify-center mb-[14px] ml-[85px] mr-[80px] mt-[30px] w-[89%]">
                  <div className="flex flex-col gap-[44px] items-center justify-center w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-end justify-between w-[100%]">
                      <Img
                        src="images/img_group26.svg"
                        className="h-[88px] mb-[2px] w-[auto]"
                        alt="GroupTwentySix"
                      />
                      <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start mb-[42px] md:mt-[0] sm:mt-[0] mt-[21px] md:w-[100%] sm:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row sm:gap-[52px] items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            YOOREED
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            OPERATEURS
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            PARTENAIRES
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            EVENEMENTS
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            CONTACT
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-normal md:mt-[0] sm:mt-[0] mt-[21px] not-italic text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Rue de la cite, Sousse 4020 Seofy@mail.com Tél.: 00 216
                        98 100 100
                      </Text>
                    </div>
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[15px] items-start justify-start p-[3px] w-[15px]"
                        style={{
                          backgroundImage: "url('images/img_group25.svg')",
                        }}
                      >
                        <Img
                          src="images/img_lightbulb.svg"
                          className="h-[8px] w-[7px]"
                          alt="lightbulb"
                        />
                      </div>
                      <Text
                        className="not-italic text-left text-white_A700 w-[auto]"
                        variant="body1"
                      >
                        COPYRIGHT YOOREED 2023
                      </Text>
                      <Line className="bg-white_A700 h-[1px] md:mt-[0] sm:mt-[0] my-[8px] rotate-[180deg] w-[auto]" />
                      <div className="flex md:flex-1 sm:flex-1 flex-row items-start justify-center md:w-[100%] sm:w-[100%] w-[auto]">
                        <Img
                          src="images/img_facebook.svg"
                          className="common-pointer h-[14px] w-[14px]"
                          onClick={handleNavigate9}
                          alt="facebook"
                        />
                        <Img
                          src="images/img_camera.svg"
                          className="h-[15px] ml-[10px] w-[15px]"
                          alt="camera"
                        />
                        <Img
                          src="images/img_linkedin.svg"
                          className="h-[13px] ml-[13px] w-[13px]"
                          alt="linkedin"
                        />
                      </div>
                      <Line className="bg-white_A700 h-[1px] md:mt-[0] sm:mt-[0] my-[8px] rotate-[180deg] w-[auto]" />
                      <Text
                        className="not-italic text-left text-white_A700 w-[auto]"
                        variant="body1"
                      >
                        INFORMATIONS LEGALES - AGENCE WE SLOTH-LAB
                      </Text>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LesvenementsdeYooreedPage;
