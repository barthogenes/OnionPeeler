import { readFileSync } from 'fs';
import { decodeAscii85 } from '../../src/part0/ascii85decoder';

describe('decodeAscii85', () => {
  it('decodes <~9jqo^~> to Man', () => {
    // Arrange, Act
    const result = decodeAscii85('<~9jqo^~>');

    // Assert
    expect(result).toBe('Man ');
  });

  it('decodes example string', () => {
    // Arrange, Act
    const result = decodeAscii85(
      "<~9jqo^BlbD-BleB1DJ+*+F(f,q/0JhKF<GL>Cj@.4Gp$d7F!,L7@<6@)/0JDEF<G%<+EV:2F!,O<DJ+*.@<*K0@<6L(Df-\\0Ec5e;DffZ(EZee.Bl.9pF\"AGXBPCsi+DGm>@3BB/F*&OCAfu2/AKYi(DIb:@FD,*)+C]U=@3BN#EcYf8ATD3s@q?d$AftVqCh[NqF<G:8+EV:.+Cf>-FD5W8ARlolDIal(DId<j@<?3r@:F%a+D58'ATD4$Bl@l3De:,-DJs`8ARoFb/0JMK@qB4^F!,R<AKZ&-DfTqBG%G>uD.RTpAKYo'+CT/5+Cei#DII?(E,9)oF*2M7/c~>",
    );

    // Assert
    expect(result).toBe(
      'Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.',
    );
  });

  it('decodes the payload', () => {
    // Arrange
    const rawPayload = readFileSync("__tests__/part0/rawPayload.txt", 'ascii');
    const decodedPayload = readFileSync("Layer0-Decoded.txt", 'ascii');

    // Act
    const result = decodeAscii85(rawPayload);

    // Assert
    expect(result).toBe(decodedPayload);
  });
});
