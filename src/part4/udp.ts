export interface UDPHeader {
    SourcePort: number;
    DestinationPort: number;
    Length: number;
    Checksum: number;
}

export const parseUDPHeader = (buffer: Buffer): UDPHeader => {
    return {
        SourcePort: buffer.readUintBE(0, 2),
        DestinationPort: buffer.readUintBE(2, 2),
        Length: buffer.readUintBE(4, 2),
        Checksum: buffer.readUintBE(6, 2)
    };
}