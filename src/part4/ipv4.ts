export interface IPv4Header {
    Version: number;
    IHL: number;
    DSCP: number;
    ECN: number;
    TotalLength: number;
    Identification: number;
    Flags: number;
    FragmentOffset: number;
    TTL: number;
    Protocol: number;
    HeaderChecksum: number;
    SourceIP: [number, number, number, number];
    DestinationIP: [number, number, number, number];
}

export const parseIPv4Header = (buffer: Buffer): IPv4Header => {
    const ipv4Packet: Partial<IPv4Header> = {};

    const versionAndIHLByte = buffer.readUintBE(0, 1);
    ipv4Packet.Version = versionAndIHLByte >> 4;
    ipv4Packet.IHL = versionAndIHLByte & 0x0F;

    const DSCPAndECNByte = buffer.readUintBE(1, 1);
    ipv4Packet.DSCP = DSCPAndECNByte >> 2;
    ipv4Packet.ECN = DSCPAndECNByte & 0x03;

    ipv4Packet.TotalLength = buffer.readUintBE(2, 2);

    ipv4Packet.Identification = buffer.readUintBE(4, 2);

    const flagsAndFragmentOffsetByte = buffer.readUintBE(6, 2);
    ipv4Packet.Flags = flagsAndFragmentOffsetByte >> 13;
    ipv4Packet.FragmentOffset = flagsAndFragmentOffsetByte & 0x1FFF;

    ipv4Packet.TTL = buffer.readUintBE(8, 1);
    ipv4Packet.Protocol = buffer.readUintBE(9, 1);

    ipv4Packet.HeaderChecksum = buffer.readUintBE(10, 2);

    return {
        Version: buffer.readUintBE(0, 1) >> 4,
        IHL: buffer.readUintBE(0, 1) & 0x0F,
        DSCP: buffer.readUintBE(1, 1) >> 2,
        ECN: buffer.readUintBE(1, 1) & 0x03,
        TotalLength: buffer.readUintBE(2, 2),
        Identification: buffer.readUintBE(4, 2),
        Flags: buffer.readUintBE(6, 2) >> 13,
        FragmentOffset: buffer.readUintBE(6, 2) & 0x1FFF,
        TTL: buffer.readUintBE(8, 1),
        Protocol: buffer.readUintBE(9, 1),
        HeaderChecksum: buffer.readUintBE(10, 2),
        SourceIP: [
            buffer.readUintBE(12, 1),
            buffer.readUintBE(13, 1),
            buffer.readUintBE(14, 1),
            buffer.readUintBE(15, 1)
        ],
        DestinationIP: [
            buffer.readUintBE(16, 1),
            buffer.readUintBE(17, 1),
            buffer.readUintBE(18, 1),
            buffer.readUintBE(19, 1)
        ]
    };
}

export const validateIPv4Header = (ipv4Header: Buffer): boolean => {
    let checksum = 0;
    for (let index = 0; index < 10; index++) {
        checksum += ipv4Header.readUint16BE(index);
    }
    const carryBit = checksum >> 16;
    checksum = checksum & 0x0ffff;
    checksum = checksum + carryBit;
    return checksum === 0;
}
